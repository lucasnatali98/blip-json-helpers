import { BlipHttpResponseTemplate } from "@/blip/blip-response-builder";
import { HttpDataResponse } from "@/shared/http-data-response";
import {
  AddAgentResponse,
  AgentInfoDetail,
  DeleteAgentResponse,
  GetAgentsProductivityResponse,
  GetAgentsReportResponse,
  SearchRangeDate,
} from "../infrastructure/data/blip-attendant-dto";

export interface BlipAttendantController {
  addAgent(): Promise<
    HttpDataResponse<BlipHttpResponseTemplate<AddAgentResponse>>
  >;
  getAllBotAgents(): Promise<
    HttpDataResponse<BlipHttpResponseTemplate<AgentInfoDetail>>
  >;
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
  async getAllBotAgents(): Promise<
    HttpDataResponse<BlipHttpResponseTemplate<AgentInfoDetail>>
  > {
    throw new Error("Method not implemented.");
  }
  async deleteAgent(): Promise<
    HttpDataResponse<BlipHttpResponseTemplate<DeleteAgentResponse>>
  > {
    throw new Error("Method not implemented.");
  }
  async getAgentsProductivity(
    dto: SearchRangeDate
  ): Promise<
    HttpDataResponse<BlipHttpResponseTemplate<GetAgentsProductivityResponse>>
  > {
    throw new Error("Method not implemented.");
  }
  async getReportAboutAgents(
    dto: SearchRangeDate
  ): Promise<
    HttpDataResponse<BlipHttpResponseTemplate<GetAgentsReportResponse>>
  > {
    throw new Error("Method not implemented.");
  }
  async addAgent(): Promise<
    HttpDataResponse<BlipHttpResponseTemplate<AddAgentResponse>>
  > {
    throw new Error("Method not implemented.");
  }
}
