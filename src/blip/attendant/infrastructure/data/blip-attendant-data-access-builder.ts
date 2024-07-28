import { HttpClientProvider } from "@/shared/http-client";
import {
  BlipAttendantDataAccess,
  BlipAttendantDataAccessImpl,
} from "../attendant-data-access";

export class BlipAttendantDataAccessBuilder {
  private _instance: BlipAttendantDataAccess | null;
  constructor() {
    this._instance = null;
  }

  create(): BlipAttendantDataAccessBuilder {
    const httpClient = HttpClientProvider.getHttpClient();
    this._instance = new BlipAttendantDataAccessImpl(httpClient);
    return this;
  }
  build(): BlipAttendantDataAccess {
    if (this._instance) {
      return this._instance;
    }
    return this.create().build();
  }
}
