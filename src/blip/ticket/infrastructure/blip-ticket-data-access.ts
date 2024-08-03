import {
  BlipHttpResponseTemplate,
  BlipHttpResponseTemplateBuilder,
} from "@/blip/blip-response-builder";
import { HttpClient } from "@/shared/http-client";
import { Ticket } from "../ticket";
import logger from "@/shared/logger";
import { config } from "@/shared/config";
import {
  BlipGetReportAboutTicketsResourceDto,
  BlipGetReportAboutTicketsResponseDto,
} from "./data/blip-ticket-response-dto";

export interface BlipTicketDataAccess {
  get(dto: BlipGetTicketRequestDto): Promise<BlipHttpResponseTemplate<Ticket>>;
  getAllBotTickets(
    dto: BlipGetAllTicketsRequestDto
  ): Promise<BlipHttpResponseTemplate<Ticket[]>>;
  createTicket(
    dto: BlipCreateTicketRequestDto
  ): Promise<BlipHttpResponseTemplate<Ticket>>;
  getReportAboutTickets(
    dto: BlipGetReportAboutTicketsRequestDto
  ): Promise<BlipGetReportAboutTicketsResponseDto>;
}

export class BlipTicketDataAccessImpl implements BlipTicketDataAccess {
  private _routerKey: string;
  private _baseEndpoint: string;
  constructor(private readonly _httpClient: HttpClient) {
    this._routerKey = config.router_key || "";
    this._baseEndpoint = config.contract_id || "";
  }
  async getReportAboutTickets(
    dto: BlipGetReportAboutTicketsRequestDto
  ): Promise<BlipGetReportAboutTicketsResponseDto> {
    try {
      const url = `${this._baseEndpoint}/`;
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${this._routerKey}`,
      };

      const response =
        await this._httpClient.post<BlipGetReportAboutTicketsResponseDto>(
          url,
          dto,
          { headers }
        );

      logger.info("response.status: ", response.status);

      return new BlipHttpResponseTemplateBuilder<BlipGetReportAboutTicketsResourceDto>()
        .create()
        .withSuccess(true)
        .withResource(response.resource as BlipGetReportAboutTicketsResourceDto)
        .build();
    } catch (error: any) {
      logger.error(error.stack);
      return new BlipHttpResponseTemplateBuilder<BlipGetReportAboutTicketsResourceDto>()
        .create()
        .withSuccess(false)
        .build();
    }
  }
  async createTicket(
    dto: BlipCreateTicketRequestDto
  ): Promise<BlipHttpResponseTemplate<Ticket>> {
    try {
      logger.info("BlipTicketDataAccessImpl.createTicket");
      logger.info("dto", dto);

      const url = `${this._baseEndpoint}/`;
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${this._routerKey}`,
      };

      const response = await this._httpClient.post<
        BlipHttpResponseTemplate<Ticket>
      >(url, dto, { headers });

      logger.info("response.status: ", response.status);
      return new BlipHttpResponseTemplateBuilder<Ticket>()
        .create()
        .withSuccess(true)
        .withResource(response.resource)
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
      const url = `${this._baseEndpoint}/`;
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${this._routerKey}`,
      };

      const response = await this._httpClient.post<
        BlipHttpResponseTemplate<Ticket[]>
      >(url, dto, { headers });

      logger.info("response.status: ", response.status);

      return new BlipHttpResponseTemplateBuilder<Ticket[]>()
        .create()
        .withSuccess(true)
        .withResource(response.resource as Ticket[])
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
      const url = `${this._baseEndpoint}/`;
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${this._routerKey}`,
      };

      const response = await this._httpClient.post<
        BlipHttpResponseTemplate<Ticket>
      >(url, dto, { headers });

      logger.info("response.status: ", response.status);

      return new BlipHttpResponseTemplateBuilder<Ticket>()
        .create()
        .withSuccess(true)
        .withResource(response.resource as Ticket)
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
