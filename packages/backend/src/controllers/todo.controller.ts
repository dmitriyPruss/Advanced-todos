import { Request } from 'express';
import { ExtendedRequestWithBodyType, ITodo, IQuery } from '../types';
import { TodoService } from '../services/todo.service';
import { decodeUserIdFromJwt } from '../utils';

export class TodoController {
  constructor(private todoService: TodoService) {}

  async getAllTodo(req: Request) {
    const { query } = req;

    const userId = decodeUserIdFromJwt(req.headers);

    const foundTodos = await this.todoService.findAll(userId, query as IQuery);

    return foundTodos;
  }

  async getTodoById(req: ExtendedRequestWithBodyType<ITodo>) {
    const { id } = req.params;

    const foundTodo = await this.todoService.getById(id);

    return foundTodo;
  }

  async createTodo(req: ExtendedRequestWithBodyType<ITodo>) {
    const userId = decodeUserIdFromJwt(req.headers);

    req.body.userId = userId;

    const createdTodo = await this.todoService.createTodo(req.body);

    return createdTodo;
  }

  async updateTodo(req: ExtendedRequestWithBodyType<ITodo>) {
    const { id: todoId } = req.params;
    const { id, ...bodyWithoutId } = req.body;

    const updatedTodo = await this.todoService.updateTodo(todoId, bodyWithoutId);

    return updatedTodo;
  }

  async deleteTodo(req: ExtendedRequestWithBodyType<ITodo>) {
    const { id } = req.params;

    const deletedTodo = await this.todoService.deleteTodo(id);

    return deletedTodo;
  }
}

const todoController = new TodoController(new TodoService());

export default todoController;
