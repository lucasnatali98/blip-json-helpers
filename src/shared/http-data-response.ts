import { DataResponse } from "./data-response";

export type HttpDataResponse<T> = {
  statusCode: number;
  body: DataResponse<T>;
};

export type HttpClientResponse<Data, Config> = {
  data: Data
  status: number
  statusText?: string
  headers: Record<string, string>
  config: Config
  request: any 
}