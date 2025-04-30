// DELETE
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import baseApi from './baseApi';

export const useDeleteMutation = <TData = unknown, TVariables = unknown>(
  endpoint: string,
  options?: UseMutationOptions<TData, Error, TVariables>
) => {
  return useMutation<TData, Error, TVariables>({
    mutationFn: async (payload: TVariables) => {
      // if you need to pass payload in delete, include it in axios config:
      const res = await baseApi.delete(endpoint, { data: payload });
      return res.data as TData;
    },
    ...options,
  });
};
