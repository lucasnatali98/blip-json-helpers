import {
  BlipHttpResponseTemplate,
  BlipHttpResponseTemplateBuilder,
} from "@/blip/blip-response-builder";
import { HttpClient } from "@/shared/http-client";
import { Ticket } from "../ticket";
import logger from "@/shared/logger";

export interface BlipTicketDataAccess {
  get(dto: BlipGetTicketRequestDto): Promise<BlipHttpResponseTemplate<Ticket>>;
  getAllBotTickets(
    dto: BlipGetAllTicketsRequestDto
  ): Promise<BlipHttpResponseTemplate<Ticket[]>>;
  createTicket(
    dto: BlipCreateTicketRequestDto
  ): Promise<BlipHttpResponseTemplate<Ticket>>;
}
export class BlipTicketDataAccessImpl implements BlipTicketDataAccess {
  constructor(private readonly _httpClient: HttpClient) {}
  async createTicket(
    dto: BlipCreateTicketRequestDto
  ): Promise<BlipHttpResponseTemplate<Ticket>> {
    try {
      return new BlipHttpResponseTemplateBuilder<Ticket>()
        .create()
        .withSuccess(true)
        .withResource({} as Ticket)
        .build();
    } catch (error: any) {
      logger.error(error.stack);
      return new BlipHttpResponseTemplateBuilder<Ticket>()
        .create()
        .withSuccess(false)
        .build();
    }
  }
  async getAllBotTickets(
    dto: BlipGetAllTicketsRequestDto
  ): Promise<BlipHttpResponseTemplate<Ticket[]>> {
    try {
      return new BlipHttpResponseTemplateBuilder<Ticket[]>()
        .create()
        .withSuccess(true)
        .withResource([] as Ticket[])
        .build();
    } catch (error: any) {
      logger.error(error.stack);
      return new BlipHttpResponseTemplateBuilder<Ticket[]>()
        .create()
        .withSuccess(false)
        .build();
    }
  }
  async get(
    dto: BlipGetTicketRequestDto
  ): Promise<BlipHttpResponseTemplate<Ticket>> {
    try {
      return new BlipHttpResponseTemplateBuilder<Ticket>()
        .create()
        .withSuccess(true)
        .withResource({} as Ticket)
        .build();
    } catch (error: any) {
      logger.error(error.stack);
      return new BlipHttpResponseTemplateBuilder<Ticket>()
        .create()
        .withSuccess(false)
        .build();
    }
  }
}
