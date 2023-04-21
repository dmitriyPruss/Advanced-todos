import { Response, Request, NextFunction } from 'express';
import { ExtendedRequestWithBodyType, ITodo, IAuthBodyWithNewPassword, IAuthBody } from '../types';

export const tryCatchWrapper =
  <T extends ExtendedRequestWithBodyType<ITodo | IAuthBodyWithNewPassword | IAuthBody>, K>(
    controller: (req: T) => K
  ) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const responseResult = await controller(<T>req);

      res.send(responseResult);
    } catch (error) {
      next(error);
    }
  };
