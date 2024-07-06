import axios from "axios"
export interface HttpClient {
    get<T>(url: string, config?: any): Promise<T>
    post<T>(url: string, data: any, config?: any): Promise<T>;
    put<T>(url: string, data: any, config?: any): Promise<T>;
    delete<T>(url: string, config?: any): Promise<T>;

}

export class AxiosHttpClient implements HttpClient {
    async post<T>(url: string, data: any, config?: any): Promise<T> {
        throw new Error("Method not implemented.");
    }
    async put<T>(url: string, data: any, config?: any): Promise<T> {
        throw new Error("Method not implemented.");
    }
    async delete<T>(url: string, config?: any): Promise<T> {
        throw new Error("Method not implemented.");
    }
    async get<T>(url: string, config?: any): Promise<T> {
        return await axios.get(url, config)
    }
}

export class HttpClientProvider {
    private static instance: HttpClient
    static getHttpClient(): HttpClient {
        const config = {
            httpClientTool: "axios"
        }
        if(!this.instance) {
            
            if(config.httpClientTool === "axios") {
                this.instance = new AxiosHttpClient()
            }
            
        }
        return this.instance
    }
}