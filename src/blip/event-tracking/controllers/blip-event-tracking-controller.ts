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
  EventDetailResponse,
} from "../infrastructure/data/blip-event-tracking-dto";
import { HttpDataResponseBuilder } from "@/shared/http-data-response-builder";
import { InternalError } from "@/shared/errors";
import { BlipEventTrackingDataAccess } from "../infrastructure/event-tracking-data-acess";

export interface BlipEventTrackingController {
  createEvent(
    dto: CreateEventRequestDto
  ): Promise<HttpDataResponse<BlipHttpResponseTemplateWithoutResource>>;
  getEventDetails(
    dto: GetEventDetailsRequestDto
  ): Promise<HttpDataResponse<BlipHttpResponseTemplate<EventDetailResponse>>>;
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
  constructor(
    private readonly _blipEventTrackingDataAccess: BlipEventTrackingDataAccess
  ) {}
  async createEvent(
    dto: CreateEventRequestDto
  ): Promise<HttpDataResponse<BlipHttpResponseTemplateWithoutResource>> {
    try {
      const event = await this._blipEventTrackingDataAccess.createEvent(dto);

      if (event.status !== "success") {
        return new HttpDataResponseBuilder<BlipHttpResponseTemplateWithoutResource>()
          .withInfoErrorMessage([
            { message: "Houve um erro ao criar o evento" },
          ])
          .build();
      }
      return new HttpDataResponseBuilder<BlipHttpResponseTemplateWithoutResource>()
        .withOkMessage(event as BlipHttpResponseTemplateWithoutResource)
        .build();
    } catch (error: any) {
      return new HttpDataResponseBuilder<BlipHttpResponseTemplateWithoutResource>()
        .withInternalErrorMessage([InternalError])
        .build();
    }
  }

  async getEventDetails(
    dto: GetEventDetailsRequestDto
  ): Promise<HttpDataResponse<BlipHttpResponseTemplate<EventDetailResponse>>> {
    try {
      const eventDetails =
        await this._blipEventTrackingDataAccess.getEventDetails(dto);

      if (eventDetails.status !== "success") {
        return new HttpDataResponseBuilder<
          BlipHttpResponseTemplate<EventDetailResponse>
        >()
          .withInfoErrorMessage([
            { message: "Houve um erro ao buscar detalhes do evento" },
          ])
          .build();
      }
      return new HttpDataResponseBuilder<
        BlipHttpResponseTemplate<EventDetailResponse>
      >()
        .create()
        .withOkMessage(
          eventDetails as BlipHttpResponseTemplate<EventDetailResponse>
        )
        .build();
    } catch (error: any) {
      return new HttpDataResponseBuilder<
        BlipHttpResponseTemplate<EventDetailResponse>
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
      const eventCategories =
        await this._blipEventTrackingDataAccess.getEventCategories();

      if (eventCategories.status !== "success") {
        return new HttpDataResponseBuilder<
          BlipHttpResponseTemplate<GetEventCategoriesResponse>
        >()
          .withInfoErrorMessage([
            { message: "Houve um erro ao buscar categorias de evento" },
          ])
          .build();
      }

      return new HttpDataResponseBuilder<
        BlipHttpResponseTemplate<GetEventCategoriesResponse>
      >()
        .create()
        .withOkMessage(
          eventCategories as BlipHttpResponseTemplate<GetEventCategoriesResponse>
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
      const eventCounters =
        await this._blipEventTrackingDataAccess.getEventCounters(uri);

      if (eventCounters.status !== "success") {
        return new HttpDataResponseBuilder<
          BlipHttpResponseTemplate<GetEventCountersResponse>
        >()
          .withInfoErrorMessage([
            { message: "Houve um erro ao buscar contadores de evento" },
          ])
          .build();
      }
      return new HttpDataResponseBuilder<
        BlipHttpResponseTemplate<GetEventCountersResponse>
      >()
        .create()
        .withOkMessage(
          eventCounters as BlipHttpResponseTemplate<GetEventCountersResponse>
        )
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
      const event =
        await this._blipEventTrackingDataAccess.createEventWithContact(dto);

      if (event.status !== "success") {
        return new HttpDataResponseBuilder<BlipHttpResponseTemplateWithoutResource>()
          .create()
          .withInfoErrorMessage([
            { message: "Houve um erro ao criar o evento com contato" },
          ])
          .build();
      }

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
      const deletedEventCategory =
        await this._blipEventTrackingDataAccess.deleteEventCategory(uri);

      if (deletedEventCategory.status !== "success") {
        return new HttpDataResponseBuilder<BlipHttpResponseTemplateWithoutResource>()
          .create()
          .withInfoErrorMessage([
            { message: "Houve um erro ao deletar a categoria de evento" },
          ])
          .build();
      }

      return new HttpDataResponseBuilder<BlipHttpResponseTemplateWithoutResource>()
        .create()
        .withOkMessage(
          deletedEventCategory as BlipHttpResponseTemplateWithoutResource
        )
        .build();
    } catch (error: any) {
      return new HttpDataResponseBuilder<BlipHttpResponseTemplateWithoutResource>()
        .create()
        .withInternalErrorMessage([InternalError])
        .build();
    }
  }
}
