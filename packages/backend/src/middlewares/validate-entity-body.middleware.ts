import { Response, Request, NextFunction } from 'express';
import { Schema } from 'yup';
import { errors } from '../errors';

const { ValidationEntityBodyError } = errors;

export const validateEntityBody =
  (schema: Schema) => async (req: Request, res: Response, next: NextFunction) => {
    const isValid = await schema.isValid(req.body);

    if (!isValid) {
      return next(ValidationEntityBodyError);
    }

    next();
  };
