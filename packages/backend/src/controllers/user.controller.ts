import { ExtendedRequestWithBodyType, IAuthBody, IAuthBodyWithNewPassword } from '../types';
import { UserService } from '../services';
import { decodeUserIdFromJwt } from '../utils';

export class UserController {
  constructor(private userService: UserService) {}

  async getUser(req: ExtendedRequestWithBodyType<IAuthBody>) {
    const userId = decodeUserIdFromJwt(req.headers);

    const foundUser = await this.userService.getUserById(userId);

    return foundUser;
  }

  async signUp(req: ExtendedRequestWithBodyType<IAuthBody>) {
    const newUser = await this.userService.registrateUser(req);

    return newUser;
  }

  async login(req: ExtendedRequestWithBodyType<IAuthBody>) {
    const foundUser = await this.userService.generateJWT(req);

    return foundUser;
  }

  async updatePassword(req: ExtendedRequestWithBodyType<IAuthBodyWithNewPassword>) {
    const updatedUser = await this.userService.changePassword(req);

    return updatedUser;
  }
}

const userController = new UserController(new UserService());

export default userController;
