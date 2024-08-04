import {
  BlipHttpResponseTemplateWithoutResource,
  BlipHttpResponseTemplate,
} from "@/blip/blip-response-builder";
import { HttpDataResponse } from "@/shared/http-data-response";
import {
  CreateEventRequestDto,
  GetEventDetailsRequestDto,
  GetEventDetailsResponse,
  GetEventCategoriesResponse,
  GetEventCountersResponse,
  CreateEventWithContactRequestDto,
} from "../infrastructure/data/blip-event-tracking-dto";
import { HttpDataResponseBuilder } from "@/shared/http-data-response-builder";
import { InternalError } from "@/shared/errors";

export interface BlipEventTrackingController {
  createEvent(
    dto: CreateEventRequestDto
  ): Promise<HttpDataResponse<BlipHttpResponseTemplateWithoutResource>>;
  getEventDetails(
    dto: GetEventDetailsRequestDto
  ): Promise<
    HttpDataResponse<BlipHttpResponseTemplate<GetEventDetailsResponse>>
  >;
  getEventCategories(): Promise<
    HttpDataResponse<BlipHttpResponseTemplate<GetEventCategoriesResponse>>
  >;
  getEventCounters(
    uri: string
  ): Promise<
    HttpDataResponse<BlipHttpResponseTemplate<GetEventCountersResponse>>
  >;
  createEventWithContact(
    dto: CreateEventWithContactRequestDto
  ): Promise<HttpDataResponse<BlipHttpResponseTemplateWithoutResource>>;
  deleteEventCategory(
    uri: string
  ): Promise<HttpDataResponse<BlipHttpResponseTemplateWithoutResource>>;
}

export class BlipEventTrackingControllerImpl
  implements BlipEventTrackingController
{
  async createEvent(
    dto: CreateEventRequestDto
  ): Promise<HttpDataResponse<BlipHttpResponseTemplateWithoutResource>> {
    try {
      return new HttpDataResponseBuilder<BlipHttpResponseTemplateWithoutResource>()
        .withOkMessage({} as BlipHttpResponseTemplateWithoutResource)
        .build();
    } catch (error: any) {
      return new HttpDataResponseBuilder<BlipHttpResponseTemplateWithoutResource>()
        .withInternalErrorMessage([InternalError])
        .build();
    }
  }

  async getEventDetails(
    dto: GetEventDetailsRequestDto
  ): Promise<
    HttpDataResponse<BlipHttpResponseTemplate<GetEventDetailsResponse>>
  > {
    try {
      return new HttpDataResponseBuilder<
        BlipHttpResponseTemplate<GetEventDetailsResponse>
      >()
        .create()
        .withOkMessage({} as BlipHttpResponseTemplate<GetEventDetailsResponse>)
        .build();
    } catch (error: any) {
      return new HttpDataResponseBuilder<
        BlipHttpResponseTemplate<GetEventDetailsResponse>
      >()
        .create()
        .withInternalErrorMessage([InternalError])
        .build();
    }
  }
  async getEventCategories(): Promise<
    HttpDataResponse<BlipHttpResponseTemplate<GetEventCategoriesResponse>>
  > {
    try {
      return new HttpDataResponseBuilder<
        BlipHttpResponseTemplate<GetEventCategoriesResponse>
      >()
        .create()
        .withOkMessage(
          {} as BlipHttpResponseTemplate<GetEventCategoriesResponse>
        )
        .build();
    } catch (error: any) {
      return new HttpDataResponseBuilder<
        BlipHttpResponseTemplate<GetEventCategoriesResponse>
      >()
        .create()
        .withInternalErrorMessage([InternalError])
        .build();
    }
  }
  async getEventCounters(
    uri: string
  ): Promise<
    HttpDataResponse<BlipHttpResponseTemplate<GetEventCountersResponse>>
  > {
    try {
      return new HttpDataResponseBuilder<
        BlipHttpResponseTemplate<GetEventCountersResponse>
      >()
        .create()
        .withOkMessage({} as BlipHttpResponseTemplate<GetEventCountersResponse>)
        .build();
    } catch (error: any) {
      return new HttpDataResponseBuilder<
        BlipHttpResponseTemplate<GetEventCountersResponse>
      >()
        .create()
        .withInternalErrorMessage([InternalError])
        .build();
    }
  }
  async createEventWithContact(
    dto: CreateEventWithContactRequestDto
  ): Promise<HttpDataResponse<BlipHttpResponseTemplateWithoutResource>> {
    try {
      return new HttpDataResponseBuilder<BlipHttpResponseTemplateWithoutResource>()
        .create()
        .withOkMessage({} as BlipHttpResponseTemplateWithoutResource)
        .build();
    } catch (error: any) {
      return new HttpDataResponseBuilder<BlipHttpResponseTemplateWithoutResource>()
        .create()
        .withInternalErrorMessage([InternalError])
        .build();
    }
  }
  async deleteEventCategory(
    uri: string
  ): Promise<HttpDataResponse<BlipHttpResponseTemplateWithoutResource>> {
    try {
      return new HttpDataResponseBuilder<BlipHttpResponseTemplateWithoutResource>()
        .create()
        .withOkMessage({} as BlipHttpResponseTemplateWithoutResource)
        .build();
    } catch (error: any) {
      return new HttpDataResponseBuilder<BlipHttpResponseTemplateWithoutResource>()
        .create()
        .withInternalErrorMessage([InternalError])
        .build();
    }
  }
}
