export type BlipGetTicketRequestDto = {
  ticketId: string;
};

export type BlipGetAllTicketsRequestDto = {
  $filter: string;
  skip: number;
  take: number;
};

export type BlipCreateTicketRequestDto = {
  customerIdentity: string;
};

export type BlipGetReportAboutTicketsRequestDto = {
  beginDate: string;
  endDate: string;
};

export type BlipGetAllClosedTicketsRequestDto = {
  $filter: string;
  $skip: number;
  $take: number;
  $closed: boolean;
};

export type BlipGetWaitingTicketsRequestDto = {
  $filter: string;
  $skip: number;
  $take: number;
};

export type BlipGetAllMessagesFromCustomerByTicketRequestDto = {
  $take: number;
  $skip: number;
  $ascending: boolean;
  getFromOwnerIfTunnel: boolean;
};

export type BlipCloseTicketAsUserRequestDto = {
  id: string;
  status: string;
};

export type BlipCreateNewTicketForAnAttendanceRequestDto = {
  customerIdentity: string;
};

export type BlipAddTicketsTagsRequestDto = {
  id: string;
  tags: string[];
};

export type BlipCloseTicketAsAttendantRequestDto = {
  id: string;
  status: string;
};

export type BlipAssignTicketToAnAgentRequestDto = {
  id: string;
  status: string;
  agentIdentity: string;
};

export type BlipGetReportAboutTicketTimingRequestDto = {
  beginDate: string;
  endDate: string;
};

export type BlipTransferTicketToAnotherTeamRequestDto = {
  ticketId: string;
  teamName: string;
};

type BlipCreateNewTicketDirectlyToAgentAndTeamRequestDto = {
  customerIdentity: string;
  agentIdentity: string;
  team: string;
};

type BlipTransferTicketDirectlyToAgentAndTeamRequestDto = {
  ticketId: string;
  agentIdentity: string;
  team: string;
};

type BlipFinishingTicketsPreviouslyClosedByCustomerRequestDto = {
  ticketId: string;
  closedBy: string;
  tags: string[];
};
