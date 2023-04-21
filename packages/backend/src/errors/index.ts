import { BAD_REQUEST, NOT_FOUND, UNAUTHORIZED } from 'http-status-codes';
import createHttpError from 'http-errors';
import { IErrors } from '../types/errors.type';

export const errors: IErrors = {
  ValidationEntityBodyError: createHttpError(BAD_REQUEST, 'Request body was not validated'),
  NotFoundEntityError: createHttpError(NOT_FOUND, 'Not found'),
  UnauthorizedEntityError: createHttpError(UNAUTHORIZED, 'Unauthorized'),
  TokenExistError: createHttpError(BAD_REQUEST, 'Token already exists'),
  HeadersNoProvidedError: createHttpError(BAD_REQUEST, 'No headers provided'),
  NotCreatedError: createHttpError(BAD_REQUEST, 'Is not created'),
  InvalidPasswordError: createHttpError(BAD_REQUEST, 'Invalid password')
};
