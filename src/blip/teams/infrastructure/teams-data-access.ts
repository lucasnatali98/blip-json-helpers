import {
  BlipHttpResponseTemplate,
  BlipHttpResponseTemplateBuilder,
} from "@/blip/blip-response-builder";
import {
  BlipGetAllTeamsResponseResourceDto,
  BlipGetReportAboutTeamsRequestDto,
  BlipGetReportAboutTeamsResponseDto,
  BlipGetTeamMetricsResponseDto,
} from "./data/blip-teams-dto";
import logger from "@/shared/logger";
import { config } from "@/shared/config";
import { HttpClient } from "@/shared/http-client";

export interface BlipTeamsDataAccess {
  getAllTeams(): Promise<
    BlipHttpResponseTemplate<BlipGetAllTeamsResponseResourceDto>
  >;
  getReportAboutTeams(
    dto: BlipGetReportAboutTeamsRequestDto
  ): Promise<BlipHttpResponseTemplate<BlipGetReportAboutTeamsResponseDto>>;
  getTeamsMetrics(): Promise<
    BlipHttpResponseTemplate<BlipGetTeamMetricsResponseDto>
  >;
}
export class BlipTeamsDataAccessImpl implements BlipTeamsDataAccess {
  private _routerKey: string;
  private _baseEndpoint: string;
  constructor(private readonly _httpClient: HttpClient) {
    this._routerKey = config.router_key || "";
    this._baseEndpoint = config.contract_id || "";
  }
  async getAllTeams(): Promise<
    BlipHttpResponseTemplate<BlipGetAllTeamsResponseResourceDto>
  > {
    try {
      const url = `${this._baseEndpoint}/`;
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${this._routerKey}`,
      };

      const response =
        await this._httpClient.post<BlipGetAllTeamsResponseResourceDto>(
          url,
          {},
          { headers }
        );

      return new BlipHttpResponseTemplateBuilder<BlipGetAllTeamsResponseResourceDto>()
        .create()
        .withSuccess(true)
        .build();
    } catch (error: any) {
      logger.error(error.stack);
      return new BlipHttpResponseTemplateBuilder<BlipGetAllTeamsResponseResourceDto>()
        .create()
        .withSuccess(false)
        .build();
    }
  }
  async getReportAboutTeams(
    dto: BlipGetReportAboutTeamsRequestDto
  ): Promise<BlipHttpResponseTemplate<BlipGetReportAboutTeamsResponseDto>> {
    try {
      const url = `${this._baseEndpoint}/`;
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${this._routerKey}`,
      };

      const response = await this._httpClient.post<
        BlipHttpResponseTemplate<BlipGetReportAboutTeamsResponseDto>
      >(url, dto, { headers });

      return new BlipHttpResponseTemplateBuilder<BlipGetReportAboutTeamsResponseDto>()
        .create()
        .withSuccess(true)
        .withResource(response.resource)
        .build();
    } catch (error: any) {
      logger.error(error.stack);
      return new BlipHttpResponseTemplateBuilder<BlipGetReportAboutTeamsResponseDto>()
        .create()
        .withSuccess(false)
        .build();
    }
  }
  async getTeamsMetrics(): Promise<
    BlipHttpResponseTemplate<BlipGetTeamMetricsResponseDto>
  > {
    try {
      const url = `${this._baseEndpoint}/`;
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${this._routerKey}`,
      };

      const response = await this._httpClient.post<
        BlipHttpResponseTemplate<BlipGetTeamMetricsResponseDto>
      >(url, {}, { headers });

      return new BlipHttpResponseTemplateBuilder<BlipGetTeamMetricsResponseDto>()
        .create()
        .withSuccess(true)
        .withResource(response.resource)
        .build();
    } catch (error: any) {
      logger.error(error.stack);
      return new BlipHttpResponseTemplateBuilder<BlipGetTeamMetricsResponseDto>()
        .create()
        .withSuccess(false)
        .build();
    }
  }
}
