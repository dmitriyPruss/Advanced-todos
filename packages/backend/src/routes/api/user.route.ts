import { Router } from 'express';
import { auth, validateEntityBody, tryCatchWrapper } from '../../middlewares';
import { AUTHORIZATION_VALID_SCHEMA, CHANGE_PASSWORD_VALID_SCHEMA } from '../../schemas';
import userController from '../../controllers/user.controller';

const userRouter: Router = Router();

const validateBodyForChangingPassword = validateEntityBody(CHANGE_PASSWORD_VALID_SCHEMA);

const validateBodyForAuth = validateEntityBody(AUTHORIZATION_VALID_SCHEMA);

const { getUser, signUp, login, updatePassword } = userController;

// @route   POST api/user
// @desc    Register user given their email and password, returns the token upon successful registration
// @access  Public
userRouter.post('/register', validateBodyForAuth, tryCatchWrapper(signUp.bind(userController)));

userRouter.post('/login', validateBodyForAuth, tryCatchWrapper(login.bind(userController)));

userRouter.post(
  '/change-password',
  auth,
  validateBodyForChangingPassword,
  tryCatchWrapper(updatePassword.bind(userController))
);

userRouter.get('/user', auth, tryCatchWrapper(getUser.bind(userController)));

export default userRouter;
