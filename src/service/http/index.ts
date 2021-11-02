import axios, { Method } from 'axios';

export interface CommonResponse<T> {
  data: T;
  status: number;
  error?: string;
}

interface RequestPayload {
  data?: { [key: string]: unknown };
  query?: { [key: string]: unknown };
  config?: { [key: string]: unknown };
}

const axiosInstance = axios.create();

const request = (method: Method, url: string, payload: RequestPayload = {}) => {
  const { data, config } = payload;
  return axiosInstance({
    method,
    baseURL: "https://lan.mocklab.io/",
    url,
    data,
    ...config,
  });
};


export default request;
