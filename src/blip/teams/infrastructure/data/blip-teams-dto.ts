export type BlipGetAllTeamsItem = {
  name: string;
  agentsOnline: number;
};
export type BlipGetAllTeamsResponseResourceDto = {
  total: number;
  itemType: string;
  items: BlipGetAllTeamsItem[];
};

export type BlipGetReportAboutTeamsRequestDto = {
  beginDate: string;
  endDate: string;
};

export type BlipGetReportAboutTeamsItem = {
  name: string;
  waitingTickets: number;
  openedTickets: number;
  closedTickets: number;
  averageFirstResponseTime: string;
  averageWaitTime: string;
  averageAttendanceTime: string;
  averageResponseTime: string;
};
export type BlipGetReportAboutTeamsResponseDto = {
  total: number;
  itemType: string;
  items: BlipGetReportAboutTeamsItem[];
};
export type BlipGetTeamsMetricsItems = {
  name: string;
  waitingTickets: number;
  openedTickets: number;
  closedTickets: number;
  averageAttendanceTime: string;
  averageResponseTime: string;
};
export type BlipGetTeamMetricsResponseDto = {
  total: number;
  itemType: string;
  items: BlipGetTeamsMetricsItems[];
};
