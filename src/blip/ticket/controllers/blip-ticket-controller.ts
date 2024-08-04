import { BlipHttpResponseTemplate } from "@/blip/blip-response-builder";
import { HttpDataResponse } from "@/shared/http-data-response";
import { Ticket } from "../ticket";
import { BlipGetReportAboutTicketsResponseDto } from "../infrastructure/data/blip-ticket-response-dto";
import logger from "@/shared/logger";
import { InternalError } from "@/shared/errors";
import { HttpDataResponseBuilder } from "@/shared/http-data-response-builder";
import { BlipTicketDataAccess } from "../infrastructure/blip-ticket-data-access";

export interface BlipTicketController {
  get(
    dto: BlipGetTicketRequestDto
  ): Promise<HttpDataResponse<BlipHttpResponseTemplate<Ticket>>>;
  getAllBotTickets(
    dto: BlipGetAllTicketsRequestDto
  ): Promise<HttpDataResponse<BlipHttpResponseTemplate<Ticket[]>>>;
  createTicket(
    dto: BlipCreateTicketRequestDto
  ): Promise<HttpDataResponse<BlipHttpResponseTemplate<Ticket>>>;
  getReportAboutTickets(
    dto: BlipGetReportAboutTicketsRequestDto
  ): Promise<HttpDataResponse<BlipGetReportAboutTicketsResponseDto>>;
}
export class BlipTicketControllerImpl implements BlipTicketController {
  constructor(private readonly _blipTicketDataAccess: BlipTicketDataAccess) {}
  async get(
    dto: BlipGetTicketRequestDto
  ): Promise<HttpDataResponse<BlipHttpResponseTemplate<Ticket>>> {
    try {
      const response = await this._blipTicketDataAccess.get(dto);

      if (response.status !== "success") {
        return new HttpDataResponseBuilder<BlipHttpResponseTemplate<Ticket>>()
          .create()
          .withInfoErrorMessage([
            { message: "Houve um erro durante a extração" },
          ])
          .build();
      }
      return new HttpDataResponseBuilder<BlipHttpResponseTemplate<Ticket>>()
        .create()
        .withOkMessage(response)
        .build();
    } catch (error: any) {
      logger.error(error.stack);
      return new HttpDataResponseBuilder<BlipHttpResponseTemplate<Ticket>>()
        .create()
        .withInternalErrorMessage([InternalError])
        .build();
    }
  }
  async getAllBotTickets(
    dto: BlipGetAllTicketsRequestDto
  ): Promise<HttpDataResponse<BlipHttpResponseTemplate<Ticket[]>>> {
    try {
      const response = await this._blipTicketDataAccess.getAllBotTickets(dto);

      if (response.status !== "success") {
        return new HttpDataResponseBuilder<BlipHttpResponseTemplate<Ticket[]>>()
          .create()
          .withInfoErrorMessage([
            { message: "Houve um erro durante a extração" },
          ])
          .build();
      }
      return new HttpDataResponseBuilder<BlipHttpResponseTemplate<Ticket[]>>()
        .create()
        .withOkMessage(response)
        .build();
    } catch (error: any) {
      logger.error(error.stack);
      return new HttpDataResponseBuilder<BlipHttpResponseTemplate<Ticket[]>>()
        .create()
        .withInternalErrorMessage([InternalError])
        .build();
    }
  }
  async createTicket(
    dto: BlipCreateTicketRequestDto
  ): Promise<HttpDataResponse<BlipHttpResponseTemplate<Ticket>>> {
    try {
      const response = await this._blipTicketDataAccess.createTicket(dto);

      if (response.status !== "success") {
        return new HttpDataResponseBuilder<BlipHttpResponseTemplate<Ticket>>()
          .create()
          .withInfoErrorMessage([
            { message: "Houve um erro durante a extração" },
          ])
          .build();
      }
      return new HttpDataResponseBuilder<BlipHttpResponseTemplate<Ticket>>()
        .create()
        .withOkMessage(response)
        .build();
    } catch (error: any) {
      logger.error(error.stack);
      return new HttpDataResponseBuilder<BlipHttpResponseTemplate<Ticket>>()
        .create()
        .withInternalErrorMessage([InternalError])
        .build();
    }
  }
  async getReportAboutTickets(
    dto: BlipGetReportAboutTicketsRequestDto
  ): Promise<HttpDataResponse<BlipGetReportAboutTicketsResponseDto>> {
    try {
      const response =
        await this._blipTicketDataAccess.getReportAboutTickets(dto);

      if (response.status !== "success") {
        return new HttpDataResponseBuilder<BlipGetReportAboutTicketsResponseDto>()
          .create()
          .withInfoErrorMessage([
            { message: "Houve um erro durante a extração" },
          ])
          .build();
      }
      return new HttpDataResponseBuilder<BlipGetReportAboutTicketsResponseDto>()
        .create()
        .withOkMessage(response)
        .build();
    } catch (error: any) {
      logger.error(error.stack);
      return new HttpDataResponseBuilder<BlipGetReportAboutTicketsResponseDto>()
        .create()
        .withInternalErrorMessage([InternalError])
        .build();
    }
  }
}
