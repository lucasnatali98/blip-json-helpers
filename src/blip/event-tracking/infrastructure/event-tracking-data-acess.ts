import {
  BlipHttpResponseTemplate,
  BlipHttpResponseTemplateWithoutResource,
} from "@/blip/response-builder";
import { HttpClient } from "@/shared/http-client";

type Resource = {
  category: string;
  action: string;
};

type CreateEventWithContactResponse = {
  category: string;
  action: string;
  contact: {
    identity: string;
  };
};
type CreateEventRequestDto = BlipHttpResponseTemplate<Resource>;

type CreateEventWithContactRequestDto = Omit<
  BlipHttpResponseTemplate<CreateEventWithContactResponse>,
  "type"
>;

type EventDetailResponse = {
  category: string;
  action: string;
  storageDate: string;
  extras: any;
};
type GetEventDetailsResponse = BlipHttpResponseTemplate<EventDetailResponse>;
type GetEventDetailsRequestDto = Omit<
  BlipHttpResponseTemplateWithoutResource,
  "type" | "from"
> & { uri: string };

type Category = {
  category: string;
};
type GetEventCategoriesResponse = {
  itemType: string;
  items: Category[];
};

type EventCounters = {
  storageDate: string;
  category: string;
  action: string;
  count: number;
};

type GetEventCountersResponse = {
  total: number;
  itemType: string;
  items: EventCounters[];
};
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
    } catch (error: any) {}
  }
  async getEventDetails(
    dto: GetEventDetailsRequestDto
  ): Promise<GetEventDetailsResponse> {
    try {
    } catch (error: any) {}
  }
  async getEventCategories(): Promise<
    BlipHttpResponseTemplate<GetEventCategoriesResponse>
  > {
    try {
    } catch (error: any) {}
  }
  async getEventCounters(
    uri: string
  ): Promise<BlipHttpResponseTemplate<GetEventCountersResponse>> {
    try {
    } catch (error: any) {}
  }
  async createEventWithContact(
    dto: CreateEventWithContactRequestDto
  ): Promise<BlipHttpResponseTemplateWithoutResource> {
    try {
    } catch (error: any) {}
  }
  async deleteEventCategory(
    uri: string
  ): Promise<BlipHttpResponseTemplateWithoutResource> {
    try {
    } catch (error: any) {}
  }
}
