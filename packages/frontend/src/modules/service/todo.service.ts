import HttpService from './http';
import { createTodoModel } from '../models/todo.model';
import { APP_KEYS } from '../common/consts';
import { IParams, ITodo } from '../common/types';

const { BACKEND_KEYS } = APP_KEYS;

export default class TodoService extends HttpService {
  async getAll(params?: IParams) {
    const res = await this.get({
      url: BACKEND_KEYS.TODOS,
      params
    });

    const todos = res.data.data.map((todo: ITodo) => createTodoModel(todo));

    return { count: res.data.allPagesCount, todos };
  }

  async getAllForMobile(params?: IParams) {
    const res = await this.get({
      url: BACKEND_KEYS.TODOS,
      params
    });

    return res;
  }

  async getOneById(id: string) {
    const res = await this.getById({
      url: `${BACKEND_KEYS.TODOS}/${id}`
    });

    return createTodoModel(res.data);
  }

  async create(data: ITodo) {
    const res = await this.post({
      url: BACKEND_KEYS.TODOS,
      data
    });

    return createTodoModel(res.data);
  }

  async update(data: ITodo) {
    const res = await this.patch({
      url: `${BACKEND_KEYS.TODOS}/${data.id}`,
      data
    });

    return createTodoModel(res.data);
  }

  async remove(id: string) {
    const res = await this.delete({
      url: `${BACKEND_KEYS.TODOS}/${id}`
    });

    return createTodoModel(res.data);
  }
}
