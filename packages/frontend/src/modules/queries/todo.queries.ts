import { useQuery, useMutation, useInfiniteQuery } from 'react-query';
import { todoService } from '../service';
import { QUERY_KEYS } from '../common/consts/app-keys.const';
import { ITodo } from '../common/types';

export const useGetAllTodos = (
  page?: number,
  pageSize?: number,
  search?: string,
  navigationValue?: string,
  mutatedQueryKey?: string
) =>
  useQuery(
    [QUERY_KEYS.TODOS, page, pageSize, search, navigationValue, mutatedQueryKey],
    async () => {
      const res = await todoService.getAll({
        page,
        pageSize,
        search,
        navigationValue,
        mutatedQueryKey
      });

      return res;
    },
    {
      onError: (error: Error) => error.message
    }
  );

export const useGetAllTodosInfiniteScroll = (
  page?: number,
  pageSize?: number,
  search?: string,
  navigationValue?: string,
  mutatedQueryKey?: string,
  isMobile?: boolean
) =>
  useInfiniteQuery(
    [QUERY_KEYS.TODOS, page, pageSize, search, navigationValue, mutatedQueryKey, isMobile],
    async () => {
      const res = await todoService.getAllForMobile({
        page,
        pageSize,
        search,
        navigationValue,
        mutatedQueryKey,
        isMobile
      });

      return res;
    },
    {
      getNextPageParam: (lastPage) => lastPage.config.params.page + 1
    }
  );

export const useGetTodoById = (id: string) =>
  useQuery(
    [QUERY_KEYS.TODOS, id],
    async () => {
      const res = await todoService.getOneById(id);

      return res;
    },
    {
      onError: (error: Error) => error.message
    }
  );

export const usePostTodo = () =>
  useMutation(async (data: ITodo) => {
    const res = await todoService.create(data);

    return res;
  });

export const usePatchTodo = () =>
  useMutation(async (data: ITodo) => {
    const res = await todoService.update(data);

    return res;
  });

export const useDeleteTodo = () =>
  useMutation(async (id: string) => {
    const res = await todoService.remove(id);

    return res;
  });
