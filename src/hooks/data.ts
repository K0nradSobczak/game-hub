import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import ms from "ms";



export interface getAllRequest<Data> {
  counts: number;
  next: string | null;
  results: Data[];
}


export const useData2 = <Entity>(URL: string, key: string,params?: AxiosRequestConfig, staleTime?: number) => useQuery({
  queryKey: [key, params],
  queryFn: () =>
    ApiClient
      .get<getAllRequest<Entity>>(URL, {...params})
      .then(res => res.data),
  staleTime: staleTime ? staleTime : ms('1d')
})
