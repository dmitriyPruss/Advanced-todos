import { Schema, object, string, boolean } from 'yup';
import { titleTodoRegexpTemplate, descriptionTodoRegexpTemplate } from '../consts';

export const TODO_VALID_SCHEMA: Schema = object().shape({
  title: string().matches(titleTodoRegexpTemplate).required(),
  description: string().matches(descriptionTodoRegexpTemplate).required(),
  isPublic: boolean(),
  isCompleted: boolean()
});
