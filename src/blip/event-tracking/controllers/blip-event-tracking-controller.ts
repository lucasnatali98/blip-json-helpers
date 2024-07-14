import { HttpDataResponse } from "@/shared/http-data-response";
import {} from "";
export interface BlipEventTrackingController {
  getEventDetails(): Promise<HttpDataResponse<any>>;
  createEvent(): Promise<HttpDataResponse<any>>;
  getEventCategories(): Promise<HttpDataResponse<any>>;
  getEventCounters(): Promise<HttpDataResponse<any>>;
  deleteEventCategory(): Promise<HttpDataResponse<any>>;
}

export class BlipEventTrackingControllerImpl
  implements BlipEventTrackingController {}
