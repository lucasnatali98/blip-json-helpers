import { BlipHttpResponseTemplate } from "@/blip/blip-response-builder";
import { HttpDataResponse } from "@/shared/http-data-response";
import {
  AddAgentResponse,
  AgentInfoDetail,
  DeleteAgentResponse,
  GetAgentsProductivityResponse,
  GetAgentsReportResponse,
  GetAllBotAgentsRequestDto,
  SearchRangeDate,
} from "../infrastructure/data/blip-attendant-dto";
import logger from "@/shared/logger";
import { HttpDataResponseBuilder } from "@/shared/http-data-response-builder";
import { BlipAttendantDataAccess } from "../infrastructure/attendant-data-access";

export interface BlipAttendantController {
  addAgent(
    dto: BlipHttpResponseTemplate<{ identity: string; teams: string[] }>
  ): Promise<HttpDataResponse<BlipHttpResponseTemplate<AddAgentResponse>>>;
  getAllBotAgents(
    dto: GetAllBotAgentsRequestDto
  ): Promise<HttpDataResponse<BlipHttpResponseTemplate<AgentInfoDetail>>>;
  deleteAgent(): Promise<
    HttpDataResponse<BlipHttpResponseTemplate<DeleteAgentResponse>>
  >;

  getAgentsProductivity(
    dto: SearchRangeDate
  ): Promise<
    HttpDataResponse<BlipHttpResponseTemplate<GetAgentsProductivityResponse>>
  >;
  getReportAboutAgents(
    dto: SearchRangeDate
  ): Promise<
    HttpDataResponse<BlipHttpResponseTemplate<GetAgentsReportResponse>>
  >;
}

export class BlipAttendantControllerImpl implements BlipAttendantController {
  constructor(
    private readonly _blipAttendantDataAccess: BlipAttendantDataAccess
  ) {}
  async getAllBotAgents(
    dto: GetAllBotAgentsRequestDto
  ): Promise<HttpDataResponse<BlipHttpResponseTemplate<AgentInfoDetail>>> {
    try {
      const response = await this._blipAttendantDataAccess.getAllBotAgents(dto);

      if (response.status !== "success") {
        return new HttpDataResponseBuilder<
          BlipHttpResponseTemplate<AgentInfoDetail>
        >()
          .create()
          .withInfoErrorMessage([
            { message: "Houve um erro durante a extração" },
          ])
          .build();
      }
      return new HttpDataResponseBuilder<
        BlipHttpResponseTemplate<AgentInfoDetail>
      >()
        .create()
        .withOkMessage({
          ...response,
        } as BlipHttpResponseTemplate<AgentInfoDetail>)
        .build();
    } catch (error: any) {
      logger.error(error.stack);
      return new HttpDataResponseBuilder<
        BlipHttpResponseTemplate<AgentInfoDetail>
      >()
        .create()
        .withInternalErrorMessage()
        .build();
    }
  }
  async deleteAgent(): Promise<
    HttpDataResponse<BlipHttpResponseTemplate<DeleteAgentResponse>>
  > {
    try {
      const response = await this._blipAttendantDataAccess.deleteAgent("");

      if (response.status !== "success") {
        return new HttpDataResponseBuilder<
          BlipHttpResponseTemplate<DeleteAgentResponse>
        >()
          .create()
          .withInfoErrorMessage([
            { message: "Houve um erro durante a extração" },
          ])
          .build();
      }
      return new HttpDataResponseBuilder<
        BlipHttpResponseTemplate<DeleteAgentResponse>
      >()
        .create()
        .withOkMessage({
          ...response,
        } as BlipHttpResponseTemplate<DeleteAgentResponse>)
        .build();
    } catch (error: any) {
      logger.error(error.stack);
      return new HttpDataResponseBuilder<
        BlipHttpResponseTemplate<DeleteAgentResponse>
      >()
        .create()
        .withInternalErrorMessage()
        .build();
    }
  }
  async getAgentsProductivity(
    dto: SearchRangeDate
  ): Promise<
    HttpDataResponse<BlipHttpResponseTemplate<GetAgentsProductivityResponse>>
  > {
    try {
      const response =
        await this._blipAttendantDataAccess.getAgentsProductivity(dto);

      if (response.status !== "success") {
        return new HttpDataResponseBuilder<
          BlipHttpResponseTemplate<GetAgentsProductivityResponse>
        >()
          .create()
          .withInfoErrorMessage([
            { message: "Houve um erro durante a extração" },
          ])
          .build();
      }
      return new HttpDataResponseBuilder<
        BlipHttpResponseTemplate<GetAgentsProductivityResponse>
      >()
        .create()
        .withOkMessage({
          ...response,
        } as BlipHttpResponseTemplate<GetAgentsProductivityResponse>)
        .build();
    } catch (error: any) {
      logger.error(error.stack);
      return new HttpDataResponseBuilder<
        BlipHttpResponseTemplate<GetAgentsProductivityResponse>
      >()
        .create()
        .withInternalErrorMessage()
        .build();
    }
  }
  async getReportAboutAgents(
    dto: SearchRangeDate
  ): Promise<
    HttpDataResponse<BlipHttpResponseTemplate<GetAgentsReportResponse>>
  > {
    try {
      const response =
        await this._blipAttendantDataAccess.getReportAboutAgents(dto);

      if (response.status !== "success") {
        return new HttpDataResponseBuilder<
          BlipHttpResponseTemplate<GetAgentsReportResponse>
        >()
          .create()
          .withInfoErrorMessage([
            { message: "Houve um erro durante a extração" },
          ])
          .build();
      }
      return new HttpDataResponseBuilder<
        BlipHttpResponseTemplate<GetAgentsReportResponse>
      >()
        .create()
        .withOkMessage({
          ...response,
        } as BlipHttpResponseTemplate<GetAgentsReportResponse>)
        .build();
    } catch (error: any) {
      logger.error(error.stack);
      return new HttpDataResponseBuilder<
        BlipHttpResponseTemplate<GetAgentsReportResponse>
      >()
        .create()
        .withInternalErrorMessage()
        .build();
    }
  }
  async addAgent(
    dto: BlipHttpResponseTemplate<{ identity: string; teams: string[] }>
  ): Promise<HttpDataResponse<BlipHttpResponseTemplate<AddAgentResponse>>> {
    try {
      const response = await this._blipAttendantDataAccess.addAgent(dto);

      if (response.status !== "success") {
        return new HttpDataResponseBuilder<
          BlipHttpResponseTemplate<AddAgentResponse>
        >()
          .create()
          .withInfoErrorMessage([
            { message: "Houve um erro durante a extração" },
          ])
          .build();
      }
      return new HttpDataResponseBuilder<
        BlipHttpResponseTemplate<AddAgentResponse>
      >()
        .create()
        .withOkMessage({
          ...response,
        } as BlipHttpResponseTemplate<AddAgentResponse>)
        .build();
    } catch (error: any) {
      logger.error(error.stack);
      return new HttpDataResponseBuilder<
        BlipHttpResponseTemplate<AddAgentResponse>
      >()
        .create()
        .withInternalErrorMessage()
        .build();
    }
  }
}
