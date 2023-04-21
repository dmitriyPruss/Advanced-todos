import { Todo } from '../entities/Todo.entity';
import { IEntityCallback } from '../types';

export const todoCallback: IEntityCallback = async (id: string) => {
  const foundTodo = await Todo.findOneBy({ id });

  const isFoundTodoExist = Boolean(foundTodo);

  return isFoundTodoExist;
};
