import HttpService from './http';
import { APP_KEYS } from '../common/consts';
import { IUser, IUserBodyWithNewPassword } from '../common/types';
import { createUserModel } from '../models/user.model';

const { BACKEND_KEYS } = APP_KEYS;

export default class UserService extends HttpService {
  async signUp(data: IUser) {
    const res = await this.post({
      url: `${BACKEND_KEYS.USER}/${BACKEND_KEYS.SIGN_UP}`,
      data
    });

    return createUserModel(res.data);
  }

  async login(data: IUser) {
    const res = await this.post({
      url: `${BACKEND_KEYS.USER}/${BACKEND_KEYS.LOGIN}`,
      data
    });

    return createUserModel(res.data);
  }

  async getUser(token: string) {
    const res = await this.get({
      url: `${BACKEND_KEYS.USER}/${BACKEND_KEYS.USER}`,
      params: { token }
    });

    return createUserModel(res.data);
  }

  async updatePassword(user: IUserBodyWithNewPassword) {
    const { email, password, newPassword } = user;

    const res = await this.post({
      data: { email, password, newPassword },
      url: `${BACKEND_KEYS.USER}/${BACKEND_KEYS.CHANGE_PASSWORD}`
    });

    return createUserModel(res.data);
  }
}
