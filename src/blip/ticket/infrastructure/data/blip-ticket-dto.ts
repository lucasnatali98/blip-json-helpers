type BlipGetTicketRequestDto = {
  ticketId: string;
};

type BlipGetAllTicketsRequestDto = {
  $filter: string;
  skip: number;
  take: number;
};

type BlipCreateTicketRequestDto = {
  customerIdentity: string;
};

type BlipGetReportAboutTicketsRequestDto = {
  beginDate: string;
  endDate: string;
};

type BlipGetAllClosedTicketsRequestDto = {
  $filter: string;
  $skip: number;
  $take: number;
  $closed: boolean;
};

type BlipGetWaitingTicketsRequestDto = {
  $filter: string;
  $skip: number;
  $take: number;
};

type BlipGetAllMessagesFromCustomerByTicketRequestDto = {
  $take: number;
  $skip: number;
  $ascending: boolean;
  getFromOwnerIfTunnel: boolean;
};

type BlipCloseTicketAsUserRequestDto = {
  id: string;
  status: string;
};

type BlipCreateNewTicketForAnAttendanceRequestDto = {
  customerIdentity: string;
};

type BlipAddTicketsTagsRequestDto = {
  id: string;
  tags: string[];
};

type BlipCloseTicketAsAttendantRequestDto = {
  id: string;
  status: string;
};

type BlipAssignTicketToAnAgentRequestDto = {
  id: string;
  status: string;
  agentIdentity: string;
};

type BlipGetReportAboutTicketTimingRequestDto = {
  beginDate: string;
  endDate: string;
};

type BlipTransferTicketToAnotherTeamRequestDto = {
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
