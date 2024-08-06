import {
  BlipHttpResponseTemplate,
  BlipHttpResponseTemplateBuilder,
  BlipHttpResponseTemplateWithoutResource,
} from "@/blip/blip-response-builder";
import { HttpClient } from "@/shared/http-client";
import {
  BlipCreateEventCategoryResource,
  CreateEventRequestDto,
  CreateEventWithContactRequestDto,
  EventDetailResponse,
  GetEventCategoriesResponse,
  GetEventCountersResponse,
  GetEventDetailsRequestDto,
  GetEventDetailsResponse,
} from "./data/blip-event-tracking-dto";
import logger from "@/shared/logger";

export interface BlipEventTrackingDataAccess {
  createEvent(
    dto: CreateEventRequestDto
  ): Promise<BlipHttpResponseTemplateWithoutResource>;
  getEventDetails(
    dto: GetEventDetailsRequestDto
  ): Promise<GetEventDetailsResponse>;
  getEventCategories(): Promise<
    BlipHttpResponseTemplate<GetEventCategoriesResponse>
  >;
  getEventCounters(
    uri: string
  ): Promise<BlipHttpResponseTemplate<GetEventCountersResponse>>;
  createEventWithContact(
    dto: CreateEventWithContactRequestDto
  ): Promise<BlipHttpResponseTemplateWithoutResource>;
  deleteEventCategory(
    uri: string
  ): Promise<BlipHttpResponseTemplateWithoutResource>;
}
export class BlipEventTrackingDataAccessImpl
  implements BlipEventTrackingDataAccess
{
  private readonly _baseUrl;
  private readonly _authorizationKey;
  constructor(private readonly _httpClient: HttpClient) {
    this._baseUrl = process.env.BLIP_API_URL;
    this._authorizationKey = process.env.ROUTER_KEY;
  }
  async createEvent(
    dto: CreateEventRequestDto
  ): Promise<BlipHttpResponseTemplateWithoutResource> {
    try {
      const url = `${this._baseUrl}/`;
      const payload = { ...dto };
      const headers = {
        "Content-Type": "application/json",
        Authorization: this._authorizationKey,
      };
      const response =
        await this._httpClient.post<BlipHttpResponseTemplateWithoutResource>(
          url,
          payload,
          headers
        );

      const data = response as BlipHttpResponseTemplateWithoutResource;

      return data;
    } catch (error: any) {
      logger.error(error?.stack);
      const objResponseError =
        new BlipHttpResponseTemplateBuilder<BlipHttpResponseTemplateWithoutResource>()
          .create()
          .build();
      const { resource, ...errResponse } = objResponseError;
      return errResponse;
    }
  }
  async getEventDetails(
    dto: GetEventDetailsRequestDto
  ): Promise<GetEventDetailsResponse> {
    try {
      const url = `${this._baseUrl}/`;
      const headers = {
        "Content-Type": "application/json",
        Authorization: this._authorizationKey,
      };
      const response = await this._httpClient.post<GetEventDetailsResponse>(
        url,
        dto,
        headers
      );

      return response as GetEventDetailsResponse;
    } catch (error: any) {
      logger.error(error?.stack);

      return new BlipHttpResponseTemplateBuilder<EventDetailResponse>()
        .create()
        .withSuccess(false)
        .build();
    }
  }
  async getEventCategories(): Promise<
    BlipHttpResponseTemplate<GetEventCategoriesResponse>
  > {
    try {
      const url = `${this._baseUrl}/`;
      const headers = {
        "Content-Type": "application/json",
        Authorization: this._authorizationKey,
      };
      const response = await this._httpClient.get<
        BlipHttpResponseTemplate<GetEventCategoriesResponse>
      >(url, headers);

      return response as BlipHttpResponseTemplate<GetEventCategoriesResponse>;
    } catch (error: any) {
      logger.error(error?.stack);

      return new BlipHttpResponseTemplateBuilder<GetEventCategoriesResponse>()
        .create()
        .withSuccess(false)
        .build();
    }
  }
  async getEventCounters(
    uri: string
  ): Promise<BlipHttpResponseTemplate<GetEventCountersResponse>> {
    try {
      const url = `${this._baseUrl}/`;
      const headers = {
        "Content-Type": "application/json",
        Authorization: this._authorizationKey,
      };
      const response = await this._httpClient.get<
        BlipHttpResponseTemplate<GetEventCountersResponse>
      >(url, headers);

      return response as BlipHttpResponseTemplate<GetEventCountersResponse>;
    } catch (error: any) {
      logger.error(error?.stack);
      return new BlipHttpResponseTemplateBuilder<GetEventCountersResponse>()
        .create()
        .withSuccess(false)
        .build();
    }
  }
  async createEventWithContact(
    dto: CreateEventWithContactRequestDto
  ): Promise<BlipHttpResponseTemplateWithoutResource> {
    try {
      const url = `${this._baseUrl}/`;
      const headers = {
        "Content-Type": "application/json",
        Authorization: this._authorizationKey,
      };

      const response =
        await this._httpClient.post<BlipHttpResponseTemplateWithoutResource>(
          url,
          dto,
          headers
        );

      return response as BlipHttpResponseTemplateWithoutResource;
    } catch (error: any) {
      logger.error(error?.stack);
      return new BlipHttpResponseTemplateBuilder<BlipHttpResponseTemplateWithoutResource>()
        .create()
        .withSuccess(false)
        .build();
    }
  }
  async deleteEventCategory(
    uri: string
  ): Promise<BlipHttpResponseTemplateWithoutResource> {
    try {
      const url = `${this._baseUrl}/`;
      const headers = {
        "Content-Type": "application/json",
        Authorization: this._authorizationKey,
      };
      const response =
        await this._httpClient.delete<BlipHttpResponseTemplateWithoutResource>(
          url,
          headers
        );
      return response as BlipHttpResponseTemplateWithoutResource;
    } catch (error: any) {
      logger.error(error?.stack);
      return new BlipHttpResponseTemplateBuilder<BlipHttpResponseTemplateWithoutResource>()
        .create()
        .withSuccess(false)
        .build();
    }
  }
}
