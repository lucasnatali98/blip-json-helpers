import { HttpClientProvider } from "@/shared/http-client";
import {
  BlipContactDataAccess,
  BlipContactDataAccessImpl,
} from "./contacts-data-access";

export class BlipContactDataAccessBuilder {
  private _instance: BlipContactDataAccess | null;
  constructor() {
    this._instance = null;
  }

  create(): BlipContactDataAccessBuilder {
    const httpClient = HttpClientProvider.getHttpClient();
    this._instance = new BlipContactDataAccessImpl(httpClient);
    return this;
  }
  build(): BlipContactDataAccess {
    if (this._instance) {
      return this._instance;
    }
    return this.create().build();
  }
}
