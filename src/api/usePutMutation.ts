// PUT
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import baseApi from './baseApi';

export const usePutMutation = <TData = unknown, TVariables = unknown>(
  endpoint: string,
  options?: UseMutationOptions<TData, Error, TVariables>
) => {
  return useMutation<TData, Error, TVariables>({
    mutationFn: async (payload: TVariables) => {
      const res = await baseApi.put(endpoint, payload);
      return res.data as TData;
    },
    ...options,
  });
};
