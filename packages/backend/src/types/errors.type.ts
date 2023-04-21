import { HttpError } from 'http-errors';

export interface IErrors {
  [key: string]: HttpError<number>;
}
