import { hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { errors } from '../errors';
import { User } from '../entities/User.entity';
import { ExtendedRequestWithBodyType, IAuthBody, IAuthBodyWithNewPassword, IUser } from '../types';
import { saltOfRounds } from '../consts';
import { validatePassword } from '../utils';

export class UserService {
  async getUserByEmail(email: string): Promise<IUser> {
    const foundUser = await User.findOneBy({ email });

    if (!foundUser) {
      throw errors.NotFoundEntityError;
    }

    return foundUser;
  }

  async getUserById(id: string): Promise<IUser> {
    const foundUser = await User.findOneBy({ id });

    if (!foundUser) {
      throw errors.NotFoundEntityError;
    }

    return foundUser;
  }

  async createUser(email: string, password: string): Promise<IUser> {
    const userData = User.create({ email, password });

    const createdUser: IUser = await User.save(userData);

    if (!createdUser) {
      throw errors.NotCreatedError;
    }

    return createdUser;
  }

  async updateUser(data: User): Promise<IUser> {
    const { id, ...dataWithoutId } = data;

    await User.update(id, dataWithoutId);

    const updatedUser = await User.findOneBy({ id });

    if (!updatedUser) {
      throw errors.NotFoundEntityError;
    }

    return updatedUser;
  }

  async registrateUser(req: ExtendedRequestWithBodyType<IAuthBody>) {
    const { email, password } = req.body;

    const hashPassword = await hash(password, saltOfRounds);

    const newUser = await this.createUser(email, hashPassword);

    const token = sign({ id: newUser.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION
    });

    newUser.token = token;

    return newUser;
  }

  async changePassword(req: ExtendedRequestWithBodyType<IAuthBodyWithNewPassword>) {
    const { email, password, newPassword } = req.body;

    const foundUser = await this.getUserByEmail(email);

    await validatePassword(password, foundUser.password);

    const newHashPassword = await hash(newPassword, saltOfRounds);

    foundUser.password = newHashPassword;

    const updatedUser = await this.updateUser(<User>foundUser);

    return updatedUser;
  }

  async generateJWT(req: ExtendedRequestWithBodyType<IAuthBody>) {
    if (!req.headers) {
      throw errors.HeadersNoProvidedError;
    }

    const accessToken = req.headers.authorization;

    if (accessToken !== 'Bearer null') {
      throw errors.TokenExistError;
    }

    const { email, password } = req.body;

    const foundUser = await this.getUserByEmail(email);

    await validatePassword(password, foundUser!.password);

    const { id } = foundUser;

    const newAccessToken = sign({ id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION
    });

    foundUser.token = newAccessToken;

    return foundUser;
  }
}
