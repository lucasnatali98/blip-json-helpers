import { HttpClientProvider } from "@/shared/http-client";
import {
  BlipTeamsDataAccess,
  BlipTeamsDataAccessImpl,
} from "./teams-data-access";

export class BlipTeamsDataAccessBuilder {
  private _instance: BlipTeamsDataAccess | null;

  constructor() {
    this._instance = null;
  }

  create(): BlipTeamsDataAccessBuilder {
    const httpClient = HttpClientProvider.getHttpClient();
    this._instance = new BlipTeamsDataAccessImpl(httpClient);
    return this;
  }
  build(): BlipTeamsDataAccess {
    if (this._instance) return this._instance;
    return this.create().build();
  }
}
