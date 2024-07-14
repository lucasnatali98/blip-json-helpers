import {
  BlipHttpResponseTemplate,
  BlipHttpResponseTemplateWithoutResource,
} from "@/blip/blip-response-builder";
import { HttpClient } from "@/shared/http-client";
import {
  BlipCreateEventCategoryResource,
  CreateEventRequestDto,
  CreateEventWithContactRequestDto,
  GetEventCategoriesResponse,
  GetEventCountersResponse,
  GetEventDetailsRequestDto,
  GetEventDetailsResponse,
} from "./data/blip-event-tracking-dto";
import logger from "@/shared/logger";

export interface EventTrackingDataAccess {
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
export class EventTrackingDataAccessImpl implements EventTrackingDataAccess {
  constructor(private readonly _httpClient: HttpClient) {}
  async createEvent(
    dto: CreateEventRequestDto
  ): Promise<BlipHttpResponseTemplateWithoutResource> {
    try {
    } catch (error: any) {
      logger.error(error?.stack);
    }
  }
  async getEventDetails(
    dto: GetEventDetailsRequestDto
  ): Promise<GetEventDetailsResponse> {
    try {
    } catch (error: any) {
      logger.error(error?.stack);
    }
  }
  async getEventCategories(): Promise<
    BlipHttpResponseTemplate<GetEventCategoriesResponse>
  > {
    try {
      return {};
    } catch (error: any) {
      logger.error(error?.stack);
    }
  }
  async getEventCounters(
    uri: string
  ): Promise<BlipHttpResponseTemplate<GetEventCountersResponse>> {
    try {
    } catch (error: any) {
      logger.error(error?.stack);
    }
  }
  async createEventWithContact(
    dto: CreateEventWithContactRequestDto
  ): Promise<BlipHttpResponseTemplateWithoutResource> {
    try {
    } catch (error: any) {
      logger.error(error?.stack);
    }
  }
  async deleteEventCategory(
    uri: string
  ): Promise<BlipHttpResponseTemplateWithoutResource> {
    try {
    } catch (error: any) {
      logger.error(error?.stack);
    }
  }
}
