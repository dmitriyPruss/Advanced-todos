import { Response, Request, NextFunction } from 'express';
import { IEntityCallback } from '../types';
import { errors } from '../errors';

const { NotFoundEntityError } = errors;

export const isExist =
  (entityCallback: IEntityCallback) => async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const foundEntity = await entityCallback(id);

    if (!foundEntity) {
      return next(NotFoundEntityError);
    }

    next();
  };
