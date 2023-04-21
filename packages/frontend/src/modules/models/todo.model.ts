import { ITodo } from '../common/types';

export class TodoModel {
  constructor(
    readonly id: string,
    readonly title: string,
    readonly description: string,
    readonly isPublic: boolean,
    readonly isCompleted: boolean,
    readonly createdAt: string,
    readonly updatedAt: string | null
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.isPublic = isPublic;
    this.isCompleted = isCompleted;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

export const createTodoModel = (todoFromServer: ITodo) => {
  const { id, title, description, isPublic, isCompleted, createdAt, updatedAt } = todoFromServer;

  return new TodoModel(id!, title, description, isPublic, isCompleted, createdAt!, updatedAt!);
};
