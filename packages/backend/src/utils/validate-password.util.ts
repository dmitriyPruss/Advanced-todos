import { compare } from 'bcryptjs';
import { errors } from '../errors';

export const validatePassword = async (password: string, comparisonPassword: string) => {
  const isValidPassword = await compare(password, comparisonPassword);

  if (!isValidPassword) {
    throw errors.InvalidPasswordError;
  }
};
