export interface IUserFromServer {
  id: string;
  email: string;
  password: string;
  token: string;
  createdAt: string | Date;
  updatedAt: string | Date | null;
}

export interface IUser {
  id?: string;
  email: string;
  password: string;
  token?: string;
  createdAt?: string | Date;
  updatedAt?: string | Date | null;
}

export interface IUserBodyWithNewPassword {
  email: string;
  password: string;
  newPassword: string;
}
