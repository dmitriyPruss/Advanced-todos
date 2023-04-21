import { Request } from 'express';

export interface ExtendedRequestWithBodyType<T> extends Request {
  body: T;
}
