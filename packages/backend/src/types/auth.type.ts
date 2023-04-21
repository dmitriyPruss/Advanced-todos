export interface IAuthBody {
  email: string;
  password: string;
}

export interface IAuthBodyWithNewPassword extends IAuthBody {
  newPassword: string;
}
