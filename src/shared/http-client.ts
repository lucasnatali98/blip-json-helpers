import axios from "axios";
export interface HttpClient {
  get<T>(url: string, config?: any): Promise<T>;
  post<T>(url: string, data: any, config?: any): Promise<T>;
  put<T>(url: string, data: any, config?: any): Promise<T>;
  delete<T>(url: string, config?: any): Promise<T>;
}

export class AxiosHttpClient implements HttpClient {
  async post<T>(url: string, data: any, config?: any): Promise<T> {
    const response = await axios.post(url, data, config);
    return {
      status: response.status,
      ...response.data,
    };
  }
  async put<T>(url: string, input: any, config?: any): Promise<T> {
    const response = await axios.put(url, input, config);
    const data = response.data;
    return {
      status: response.status,
      ...data,
    };
  }
  async delete<T>(url: string, config?: any): Promise<T> {
    const response = await axios.delete(url, config);
    const data = response.data;
    return {
      status: response.status,
      ...data,
    };
  }
  async get<T>(url: string, config?: any): Promise<T> {
    const response = await axios.get(url, config);
    const data = response.data;
    return {
      status: response.status,
      ...data,
    };
  }
}

export class HttpClientProvider {
  private static instance: HttpClient;
  static getHttpClient(): HttpClient {
    const config = {
      httpClientTool: "axios",
    };
    if (!this.instance) {
      if (config.httpClientTool === "axios") {
        this.instance = new AxiosHttpClient();
      }
    }
    return this.instance;
  }
}
