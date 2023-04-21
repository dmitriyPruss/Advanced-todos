import { Schema, object, string } from 'yup';
import { emailRegexpTemplate, passwordRegexpTemplate } from '../common/consts';

export const AUTHORIZATION_VALID_SCHEMA: Schema = object().shape({
  email: string().matches(emailRegexpTemplate).required(),
  password: string().matches(passwordRegexpTemplate).required()
});

export const CHANGE_PASSWORD_VALID_SCHEMA: Schema = object().shape({
  email: string().matches(emailRegexpTemplate).required(),
  password: string().matches(passwordRegexpTemplate).required(),
  newPassword: string().matches(passwordRegexpTemplate).required()
});
