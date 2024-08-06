import { HttpClientProvider } from "@/shared/http-client";
import {
  BlipEventTrackingDataAccess,
  BlipEventTrackingDataAccessImpl,
} from "../event-tracking-data-acess";

export class BlipEventTrackingDataAccessBuilder {
  private _instance: BlipEventTrackingDataAccess | null;

  constructor() {
    this._instance = null;
  }

  create(): BlipEventTrackingDataAccessBuilder {
    const httpClient = HttpClientProvider.getHttpClient();
    this._instance = new BlipEventTrackingDataAccessImpl(httpClient);
    return this;
  }

  build(): BlipEventTrackingDataAccess {
    if (this._instance) return this._instance;
    return this.create().build();
  }
}
