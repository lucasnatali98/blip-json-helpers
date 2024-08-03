import { BlipHttpResponseTemplate } from "@/blip/blip-response-builder";
import { TicketsSummary } from "../../ticket";

export type BlipGetReportAboutTicketsResourceDto = {
  total: number;
  itemType: string;
  items: TicketsSummary[];
};
export type BlipGetReportAboutTicketsResponseDto =
  BlipHttpResponseTemplate<BlipGetReportAboutTicketsResourceDto>;
