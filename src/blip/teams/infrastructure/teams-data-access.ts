import { BlipHttpContactResponse } from "@/blip/contacts/infrastructure/contacts-data-access";
import { BlipHttpResponseTemplate } from "@/blip/response-builder";

type Team = {
  name: string;
  agentsOnline: number;
};
type GetAllTeamsResponse = {
  total: number;
  itemType: string;
  items: Team[];
};
type GetReportAboutTeamsRequest = {
  beginDate: string;
  endDate: string;
};

type TeamTicketSummary = {};

type GetReportAboutTeamsResponse = BlipHttpResponseTemplate<TeamTicketSummary>;
export interface TeamsDataAccess {
  getAllTeams(): Promise<any>;
  getReportAboutTeams(): Promise<any>;
  getTeamsMetrics(): Promise<any>;
}
export class TeamsDataAccessImpl implements TeamsDataAccess {}
