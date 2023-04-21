import { ITodo } from './todos.type';

export interface IUser {
  id?: string;
  email: string;
  password: string;
  token?: string;
  todos?: ITodo[];

  createdAt?: Date;
  updatedAt?: Date;
}
