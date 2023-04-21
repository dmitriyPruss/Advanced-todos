import { IncomingHttpHeaders } from 'http';
import jwt_decode from 'jwt-decode';
import { errors } from '../errors';

export const decodeUserIdFromJwt = (headers: IncomingHttpHeaders) => {
  if (!headers) {
    throw errors.HeadersNoProvidedError;
  }

  const accessToken = headers.authorization;

  if (!accessToken) {
    throw errors.UnauthorizedEntityError;
  }

  const decodedData = jwt_decode(accessToken);

  // @ts-ignore
  return decodedData.id;
};
