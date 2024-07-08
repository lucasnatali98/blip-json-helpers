import {
  BlipHttpResponseTemplate,
  BlipHttpResponseTemplateBuilder,
  BlipHttpResponseTemplateWithoutResource,
} from "@/blip/response-builder";
type AgentInfo = {
  identity: string;
  teams: string[];
};
type AddAgentResponse = {
  total: number;
  itemType: "";
  items: AgentInfo[];
};

type AgentInfoDetail = AgentInfo & {
  status: string;
  lastServiceDate: string;
};

type GetAllBotAgentsDto = {
  $skip: number;
  $take: number;
  $ascending: boolean;
};

type DeleteAgentResponse = Omit<
  BlipHttpResponseTemplateWithoutResource,
  "type"
>;

type SearchRangeDate = {
  beginDate: string;
  endDate: string;
};

type AgentsProductivity = {
  identity: string;
  online: string;
  paused: string;
  invisible: string;
  offline: string;
  total: string;
};

type AgentsReport = {
  identity: string;
  status: string;
  openedTickets: number;
  closedTickets: number;
  averageFirstResponseTime: string;
  averageWaitTime: string;
  averageAttendanceTime: string;
  averageResponseTime: string;
};
type GetAgentsReportResponse = {
  total: number;
  itemType: string;
  items: AgentsReport[];
};
type GetAgentsProductivityResponse = {
  total: number;
  itemType: string;
  items: AgentsProductivity[];
};
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
    } catch (error: any) {}
  }
  async deleteAgent(
    agentId: string
  ): Promise<BlipHttpResponseTemplate<DeleteAgentResponse>> {
    try {
    } catch (error: any) {}
  }
  async getAgentsProductivity(
    dto: SearchRangeDate
  ): Promise<BlipHttpResponseTemplate<GetAgentsProductivityResponse>> {
    try {
    } catch (error: any) {}
  }
  async getReportAboutAgents(
    dto: SearchRangeDate
  ): Promise<BlipHttpResponseTemplate<GetAgentsReportResponse>> {
    try {
    } catch (error: any) {}
  }
  async addAgent(): Promise<BlipHttpResponseTemplate<AddAgentResponse>> {
    try {
    } catch (error: any) {}
  }
}
