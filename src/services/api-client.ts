import { getAllRequest } from "@/hooks/data";
import axios, { AxiosRequestConfig } from "axios";

const ApiClient = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params:{
    key:'7169cec537e3465e813fa4fc5ec2140b'
  }
})

export class HttpClient<Entity> {
  constructor(private URL: string) {};

  getAll = (params?: AxiosRequestConfig) => {
    return ApiClient
          .get<getAllRequest<Entity>>(this.URL, {...params})
          .then(res => res.data);
  }
  create = (params?: AxiosRequestConfig) => {
    return ApiClient
            .post<Entity>(this.URL, {...params})
  }

  delete = (id: number) => {
    return ApiClient
            .delete<Entity>(this.URL + `/${id}`)
  }

}

export default ApiClient