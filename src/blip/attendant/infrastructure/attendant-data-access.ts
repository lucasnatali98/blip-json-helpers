import {
  BlipHttpResponseTemplate,
  BlipHttpResponseTemplateBuilder,
  BlipHttpResponseTemplateWithoutResource,
} from "@/blip/blip-response-builder";
import logger from "@/shared/logger";
import {
  AddAgentResponse,
  GetAllBotAgentsDto,
  AgentInfoDetail,
  SearchRangeDate,
  GetAgentsProductivityResponse,
  GetAgentsReportResponse,
} from "./data/blip-attendant-dto";
import { HttpClient } from "@/shared/http-client";
import { config } from "@/shared/config";

export interface BlipAttendantDataAccess {
  addAgent(
    dto: BlipHttpResponseTemplate<{ identity: string; teams: string[] }>
  ): Promise<BlipHttpResponseTemplate<AddAgentResponse>>;
  getAllBotAgents(
    dto: GetAllBotAgentsDto
  ): Promise<BlipHttpResponseTemplate<AgentInfoDetail>>;
  deleteAgent(
    agentId: string
  ): Promise<BlipHttpResponseTemplateWithoutResource>;
  getAgentsProductivity(
    dto: SearchRangeDate
  ): Promise<BlipHttpResponseTemplate<GetAgentsProductivityResponse>>;
  getReportAboutAgents(
    dto: SearchRangeDate
  ): Promise<BlipHttpResponseTemplate<GetAgentsReportResponse>>;
}

export class BlipAttendantDataAccessImpl implements BlipAttendantDataAccess {
  private readonly _contract_id: string;
  private readonly _baseEndpoint: string;
  private readonly _routerKey: string;
  constructor(private readonly _httpClient: HttpClient) {
    this._contract_id = config.contract_id ?? "";
    this._routerKey = config.router_key ?? "";
    this._baseEndpoint = `${this._contract_id}/commands`;
  }
  async getAllBotAgents(
    dto: GetAllBotAgentsDto
  ): Promise<BlipHttpResponseTemplate<AgentInfoDetail>> {
    try {
      const url = `${this._baseEndpoint}`;
      const headers = {
        "Content-Type": "application/json",
        Authorization: this._routerKey,
      };

      const data = await this._httpClient.post<AgentInfoDetail>(
        url,
        dto,
        headers
      );

      logger.info("getAllBotAgents Axios Response: ", { ...data });

      return new BlipHttpResponseTemplateBuilder<AgentInfoDetail>()
        .create(data)
        .build();
    } catch (error: any) {
      logger.error(error?.stack);
      return new BlipHttpResponseTemplateBuilder<AgentInfoDetail>()
        .create()
        .withSuccess(false)
        .build();
    }
  }
  async deleteAgent(
    agentId: string
  ): Promise<BlipHttpResponseTemplateWithoutResource> {
    try {
      const url = `${this._baseEndpoint}/`;
      const headers = {
        "Content-Type": "application/json",
        Authorization: this._routerKey,
      };

      const data =
        await this._httpClient.post<BlipHttpResponseTemplateWithoutResource>(
          url,
          agentId,
          headers
        );

      logger.info("deleteAgent Axios Response: ", { ...data });

      return data as BlipHttpResponseTemplate<BlipHttpResponseTemplateWithoutResource>;
    } catch (error: any) {
      logger.error(error?.stack);
      return new BlipHttpResponseTemplateBuilder<BlipHttpResponseTemplateWithoutResource>()
        .create()
        .withSuccess(false)
        .build();
    }
  }
  async getAgentsProductivity(
    dto: SearchRangeDate
  ): Promise<BlipHttpResponseTemplate<GetAgentsProductivityResponse>> {
    try {
      const url = `${this._baseEndpoint}/`;
      const headers = {
        "Content-Type": "application/json",
        Authorization: this._routerKey,
      };

      const data = await this._httpClient.post<
        BlipHttpResponseTemplate<GetAgentsProductivityResponse>
      >(url, headers, dto);

      logger.info("getAgentsProductivity Axios Response: ", { ...data });

      return data as BlipHttpResponseTemplate<GetAgentsProductivityResponse>;
    } catch (error: any) {
      logger.error(error?.stack);
      return new BlipHttpResponseTemplateBuilder<GetAgentsProductivityResponse>()
        .create()
        .withSuccess(false)
        .build();
    }
  }
  async getReportAboutAgents(
    dto: SearchRangeDate
  ): Promise<BlipHttpResponseTemplate<GetAgentsReportResponse>> {
    try {
      const url = `${this._baseEndpoint}/`;
      const headers = {
        "Content-Type": "application/json",
        Authorization: this._routerKey,
      };

      const data = await this._httpClient.post<
        BlipHttpResponseTemplate<GetAgentsReportResponse>
      >(url, headers);

      logger.info("getReportAboutAgents Axios Response: ", { ...data });
      return data as BlipHttpResponseTemplate<GetAgentsReportResponse>;
    } catch (error: any) {
      logger.error(error?.stack);
      return new BlipHttpResponseTemplateBuilder<GetAgentsReportResponse>()
        .create()
        .withSuccess(false)
        .build();
    }
  }
  async addAgent(
    dto: BlipHttpResponseTemplate<{ identity: string; teams: string[] }>
  ): Promise<BlipHttpResponseTemplate<AddAgentResponse>> {
    try {
      const url = `${this._baseEndpoint}/`;
      const headers = {
        "Content-Type": "application/json",
        Authorization: this._routerKey,
      };

      const data = await this._httpClient.post<
        BlipHttpResponseTemplate<AddAgentResponse>
      >(url, headers, dto);

      logger.info("addAgent Axios Response: ", { ...data });
      return data as BlipHttpResponseTemplate<AddAgentResponse>;
    } catch (error: any) {
      logger.error(error?.stack);
      return new BlipHttpResponseTemplateBuilder<AddAgentResponse>()
        .create()
        .withSuccess(false)
        .build();
    }
  }
}
