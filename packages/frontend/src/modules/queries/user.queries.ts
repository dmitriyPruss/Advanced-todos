import { useMutation, useQuery } from 'react-query';
import { userService } from '../service';
import { QUERY_KEYS } from '../common/consts/app-keys.const';
import { IUser, IUserBodyWithNewPassword } from '../common/types';

export const useGetUser = (token: string) =>
  useQuery(
    [QUERY_KEYS.USER, token],
    async () => {
      const res = await userService.getUser(token);

      return res;
    },
    {
      onError: (error: Error) => error.message
    }
  );

export const useLoginUser = () =>
  useMutation(async (data: IUser) => {
    const res = await userService.login(data);

    localStorage.setItem(QUERY_KEYS.TOKEN, res.token);

    return res;
  });

export const useSignUpUser = () =>
  useMutation(async (data: IUser) => {
    const res = await userService.signUp(data);

    localStorage.setItem(QUERY_KEYS.TOKEN, res.token);

    return res;
  });

export const useUpdatePassword = () =>
  useMutation(async (data: IUserBodyWithNewPassword) => {
    const res = await userService.updatePassword(data);

    return res;
  });
