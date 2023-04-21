import { Request, Response, NextFunction } from 'express';
import passport, { AuthenticateOptions, Strategy } from 'passport';
import { IUser } from '../types';
import { errors } from '../errors';

export const authUser =
  (strategy: string | string[] | Strategy, options: AuthenticateOptions) =>
  (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate(strategy, options, (error: Error, user: IUser) => {
      if (error) {
        return next(error);
      }

      if (!user) {
        return next(errors.UnauthorizedEntityError);
      }

      req.user = user;

      next();
    })(req, res, next);
  };

export const auth = authUser('jwt', { session: false });
