import { NotBrackets } from 'typeorm';
import { IQuery, ITodo } from '../types';
import { Todo } from '../entities';
import { AppDataSource } from '../config/database';
import { defaultLimit, defaultOffset } from '../consts';

export class TodoService {
  async findAll(userId: string, query: IQuery) {
    const todosQuery = AppDataSource.getRepository(Todo).createQueryBuilder('todos');

    if (query?.search) {
      const search = `%${query?.search}%`;

      todosQuery.where('"todos"."title" ilike :search', { search });
    }

    if (query?.navigationValue === 'Private' && !query?.search) {
      todosQuery
        .where('todos.isPublic = :isPublic', { isPublic: false })
        .andWhere('todos.userId = :userId', { userId });
    }

    if (query?.navigationValue === 'Public' && !query?.search) {
      todosQuery.where('todos.isPublic = :isPublic', { isPublic: true });
    }

    if (query?.navigationValue === 'All' && !query?.search) {
      todosQuery.where(
        new NotBrackets((qb) => {
          qb.where('todos.isPublic = :isPublic', { isPublic: false }).andWhere(
            'todos.userId NOT IN (:...ids)',
            { ids: [userId] }
          );
        })
      );
    }

    if (query?.navigationValue === 'Completed' && !query?.search) {
      todosQuery.where('todos.isCompleted = :isCompleted', { isCompleted: true }).andWhere(
        new NotBrackets((qb) => {
          qb.where('todos.isPublic = :isPublic', { isPublic: false }).andWhere(
            'todos.userId NOT IN (:...ids)',
            { ids: [userId] }
          );
        })
      );
    }

    const offset = +(query.page || 0) * defaultOffset;
    const limit = +query.pageSize || defaultLimit;

    const allPagesCount = (await todosQuery.getMany()).length;

    const foundTodos = await todosQuery
      .orderBy('todos.createdAt', 'DESC')
      .skip(offset)
      .take(limit)
      .getMany();

    return { data: foundTodos, allPagesCount };
  }

  async getById(id: string) {
    const foundTodo = await Todo.findOneBy({ id });

    return foundTodo;
  }

  async createTodo(body: ITodo) {
    const newTodoInstance = Todo.create({ ...body });

    const newTodo = await Todo.save(newTodoInstance);

    return newTodo;
  }

  async updateTodo(id: string, bodyWithoutId: ITodo) {
    await Todo.update(id, bodyWithoutId);

    const updatedTodo = await this.getById(id);

    return updatedTodo;
  }

  async deleteTodo(id: string) {
    const deletedTodo = this.getById(id);

    await Todo.delete(id);

    return deletedTodo;
  }
}
