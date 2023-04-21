import { Schema, object, string } from 'yup';
import { emailRegexpTemplate, passwordRegexpTemplate } from '../consts';

const PASSWORD_SCHEMA = string().matches(passwordRegexpTemplate).required();

export const AUTHORIZATION_VALID_SCHEMA: Schema = object().shape({
  email: string().matches(emailRegexpTemplate).required(),
  password: PASSWORD_SCHEMA
});

export const CHANGE_PASSWORD_VALID_SCHEMA: Schema = object().shape({
  email: string().matches(emailRegexpTemplate).required(),
  password: PASSWORD_SCHEMA,
  newPassword: PASSWORD_SCHEMA
});
