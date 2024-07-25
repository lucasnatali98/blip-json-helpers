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

export interface BlipAttendantDataAccess {
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

export class BlipAttendantDataAccessImpl implements BlipAttendantDataAccess {
  async getAllBotAgents(
    dto: GetAllBotAgentsDto
  ): Promise<BlipHttpResponseTemplate<AgentInfoDetail>> {
    try {
      return new BlipHttpResponseTemplateBuilder<AgentInfoDetail>()
        .create()
        .build();
    } catch (error: any) {
      logger.error(error?.stack);
      return {} as BlipHttpResponseTemplate<AgentInfoDetail>;
    }
  }
  async deleteAgent(
    agentId: string
  ): Promise<BlipHttpResponseTemplate<DeleteAgentResponse>> {
    try {
      return {} as BlipHttpResponseTemplate<DeleteAgentResponse>;
    } catch (error: any) {
      logger.error(error?.stack);
      return {} as BlipHttpResponseTemplate<DeleteAgentResponse>;
    }
  }
  async getAgentsProductivity(
    dto: SearchRangeDate
  ): Promise<BlipHttpResponseTemplate<GetAgentsProductivityResponse>> {
    try {
      return {} as BlipHttpResponseTemplate<GetAgentsProductivityResponse>;
    } catch (error: any) {
      logger.error(error?.stack);
      return {} as BlipHttpResponseTemplate<GetAgentsProductivityResponse>;
    }
  }
  async getReportAboutAgents(
    dto: SearchRangeDate
  ): Promise<BlipHttpResponseTemplate<GetAgentsReportResponse>> {
    try {
      return {} as BlipHttpResponseTemplate<GetAgentsReportResponse>;
    } catch (error: any) {
      logger.error(error?.stack);
      return {} as BlipHttpResponseTemplate<GetAgentsReportResponse>;
    }
  }
  async addAgent(): Promise<BlipHttpResponseTemplate<AddAgentResponse>> {
    try {
      return {} as BlipHttpResponseTemplate<AddAgentResponse>;
    } catch (error: any) {
      logger.error(error?.stack);
      return {} as BlipHttpResponseTemplate<AddAgentResponse>;
    }
  }
}
