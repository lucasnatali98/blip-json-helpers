import { BlipHttpResponseTemplateWithoutResource } from "@/blip/blip-response-builder";

export type AgentInfo = {
  identity: string;
  teams: string[];
};
export type AddAgentResponse = {
  total: number;
  itemType: string;
  items: AgentInfo[];
};

export type AgentInfoDetail = AgentInfo & {
  status: string;
  lastServiceDate: string;
};

export type GetAllBotAgentsDto = {
  $skip: number;
  $take: number;
  $ascending: boolean;
};

export type DeleteAgentResponse = Omit<
  BlipHttpResponseTemplateWithoutResource,
  "type"
>;

export type SearchRangeDate = {
  beginDate: string;
  endDate: string;
};

export type AgentsProductivity = {
  identity: string;
  online: string;
  paused: string;
  invisible: string;
  offline: string;
  total: string;
};

export type AgentsReport = {
  identity: string;
  status: string;
  openedTickets: number;
  closedTickets: number;
  averageFirstResponseTime: string;
  averageWaitTime: string;
  averageAttendanceTime: string;
  averageResponseTime: string;
};
export type GetAgentsReportResponse = {
  total: number;
  itemType: string;
  items: AgentsReport[];
};
export type GetAgentsProductivityResponse = {
  total: number;
  itemType: string;
  items: AgentsProductivity[];
};

export type GetAllBotAgentsRequestDto = {
  $take: number;
  $skip: number;
  $ascending: boolean;
};
