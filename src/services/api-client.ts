import { getAllRequest } from "@/request/getAllRequest";
import axios, { AxiosRequestConfig } from "axios";

const ApiClient = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params:{
    key:'7169cec537e3465e813fa4fc5ec2140b'
  }
})

export class HttpClient<Entity> {
  constructor(private URL: string) {};

  getAll = async (params?: AxiosRequestConfig) => {
    const res = await ApiClient
      .get<getAllRequest<Entity>>(this.URL, { ...params });
    return res.data;
  }
  create = (params?: AxiosRequestConfig) => {
    return ApiClient
            .post<Entity>(this.URL, {...params})
  }

  delete = (id: number) => {
    return ApiClient
            .delete<Entity>(this.URL + `/${id}`)
  }

  get = async (id: string | number) => {
    const res =await ApiClient
            .get<Entity>(this.URL + `/${id}`).then(res => res.data);

    return res;
  }

}

export default ApiClient