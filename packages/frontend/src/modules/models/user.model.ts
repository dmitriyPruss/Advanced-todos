import { IUserFromServer } from '../common/types';

export class UserModel {
  constructor(
    readonly id: string,
    readonly email: string,
    readonly token: string,
    readonly createdAt: string | Date,
    readonly updatedAt: string | Date | null
  ) {
    this.id = id;
    this.email = email;
    this.token = token;
    this.createdAt = new Date(createdAt);
    this.updatedAt = updatedAt !== null ? new Date(updatedAt) : updatedAt;
  }
}

export const createUserModel = (user: IUserFromServer) => {
  const { id, email, token, createdAt, updatedAt } = user;

  return new UserModel(id, email, token, createdAt, updatedAt);
};
