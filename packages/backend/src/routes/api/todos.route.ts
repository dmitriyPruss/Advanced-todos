import { Router } from 'express';
import todoController from '../../controllers/todo.controller';
import { auth, isExist, tryCatchWrapper, validateEntityBody } from '../../middlewares';
import { TODO_VALID_SCHEMA } from '../../schemas';
import { todoCallback } from '../../utils';

const todosRouter: Router = Router();

const validateBody = validateEntityBody(TODO_VALID_SCHEMA);

const { getAllTodo, getTodoById, createTodo, updateTodo, deleteTodo } = todoController;

todosRouter
  .route('')
  .get(auth, tryCatchWrapper(getAllTodo.bind(todoController)))
  .post(auth, validateBody, tryCatchWrapper(createTodo.bind(todoController)));

todosRouter
  .route('/:id')
  .get(auth, isExist(todoCallback), tryCatchWrapper(getTodoById.bind(todoController)))
  .patch(
    auth,
    isExist(todoCallback),
    validateBody,
    tryCatchWrapper(updateTodo.bind(todoController))
  )
  .delete(auth, isExist(todoCallback), tryCatchWrapper(deleteTodo.bind(todoController)));

export default todosRouter;
