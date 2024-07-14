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
  DeleteAgentResponse,
  SearchRangeDate,
  GetAgentsProductivityResponse,
  GetAgentsReportResponse,
} from "./data/blip-attendant-dto";

export interface AttendantDataAccess {
  addAgent(): Promise<BlipHttpResponseTemplate<AddAgentResponse>>;
  getAllBotAgents(
    dto: GetAllBotAgentsDto
  ): Promise<BlipHttpResponseTemplate<AgentInfoDetail>>;
  deleteAgent(
    agentId: string
  ): Promise<BlipHttpResponseTemplate<DeleteAgentResponse>>;
  getAgentsProductivity(
    dto: SearchRangeDate
  ): Promise<BlipHttpResponseTemplate<GetAgentsProductivityResponse>>;
  getReportAboutAgents(
    dto: SearchRangeDate
  ): Promise<BlipHttpResponseTemplate<GetAgentsReportResponse>>;
}

export class AttendantDataAccessImpl implements AttendantDataAccess {
  async getAllBotAgents(
    dto: GetAllBotAgentsDto
  ): Promise<BlipHttpResponseTemplate<AgentInfoDetail>> {
    try {
      return new BlipHttpResponseTemplateBuilder<AgentInfoDetail>()
        .create()
        .build();
    } catch (error: any) {
      logger.error(error?.stack);
    }
  }
  async deleteAgent(
    agentId: string
  ): Promise<BlipHttpResponseTemplate<DeleteAgentResponse>> {
    try {
    } catch (error: any) {
      logger.error(error?.stack);
    }
  }
  async getAgentsProductivity(
    dto: SearchRangeDate
  ): Promise<BlipHttpResponseTemplate<GetAgentsProductivityResponse>> {
    try {
    } catch (error: any) {
      logger.error(error?.stack);
    }
  }
  async getReportAboutAgents(
    dto: SearchRangeDate
  ): Promise<BlipHttpResponseTemplate<GetAgentsReportResponse>> {
    try {
    } catch (error: any) {
      logger.error(error?.stack);
    }
  }
  async addAgent(): Promise<BlipHttpResponseTemplate<AddAgentResponse>> {
    try {
    } catch (error: any) {
      logger.error(error?.stack);
    }
  }
}
