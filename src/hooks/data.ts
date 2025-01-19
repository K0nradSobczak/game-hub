import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";


export interface getAllRequest<Data> {
  counts: number;
  results: Data[];
}

const useData = <Entity>(URL: string, params?: AxiosRequestConfig, deps?: any[]) => {
  const [errors, setError] = useState([]);
  const [data, setData] = useState<Entity[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
      ApiClient
        .get<getAllRequest<Entity>>(URL, {signal: controller.signal, ...params})
          .then((res) => {
            setData(res.data.results)
            setLoading(false);
          })
          .catch((err) => {
            if (err instanceof CanceledError ) return;
            console.log(err.message);
            setError(err.message);
            setLoading(false);
          });
        return () => controller.abort();
    },deps ? [...deps] : []);

    return {errors, data, isLoading}
};

export const useData2 = <Entity>(URL: string, key: string,params?: AxiosRequestConfig, staleTime?: number) => useQuery({
  queryKey: [key, params],
  queryFn: () =>
    ApiClient
      .get<getAllRequest<Entity>>(URL, {...params})
      .then(res => res.data),
  staleTime: staleTime ? staleTime : 24 * 60 * 60 * 1000
})

export default useData;