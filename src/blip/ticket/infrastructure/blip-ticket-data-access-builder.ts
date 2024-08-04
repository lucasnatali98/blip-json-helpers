import { HttpClientProvider } from "@/shared/http-client";
import {
  BlipTicketDataAccess,
  BlipTicketDataAccessImpl,
} from "./blip-ticket-data-access";

export class BlipTicketDataAccessBuilder {
  private _instance: BlipTicketDataAccess | null;

  constructor() {
    this._instance = null;
  }

  create(): BlipTicketDataAccessBuilder {
    const httpClient = HttpClientProvider.getHttpClient();
    this._instance = new BlipTicketDataAccessImpl(httpClient);
    return this;
  }
  build(): BlipTicketDataAccess {
    if (this._instance) return this._instance;
    return this.create().build();
  }
}
