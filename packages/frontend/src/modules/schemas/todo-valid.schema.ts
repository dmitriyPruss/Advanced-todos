import { Schema, object, string } from 'yup';
import { descriptionTodoRegexpTemplate, titleTodoRegexpTemplate } from '../common/consts';

export const TODO_VALID_SCHEMA: Schema = object().shape({
  title: string().matches(titleTodoRegexpTemplate).required(),
  description: string().matches(descriptionTodoRegexpTemplate).required()
});
