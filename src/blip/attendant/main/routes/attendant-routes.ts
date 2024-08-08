import { Router, Request, Response } from "express";

import {
  AddAgentRequestDto,
  GetAgentsProductivityRequestDto,
  getAgentsProductivityRequestSchema,
  GetAllBotAgentsRequestDto,
  getAllBotAgentsRequestSchema,
  GetReportAboutAgentsDto,
  getReportAboutAgentsRequestSchema,
} from "../middleware/attendant-schemas";
import { BlipAttendantMiddlewareValidate } from "../middleware/attendant-validate";
import { companyNameFromString } from "@/core/domain/data/value-object/company";
const blipAttendantRoutes = Router();

blipAttendantRoutes.get(
  "/:company/blip/get-all-bot-agents",
  [
    BlipAttendantMiddlewareValidate.queryValidate<GetAllBotAgentsRequestDto>(
      getAllBotAgentsRequestSchema
    ),
  ],
  (req: Request, res: Response) => {
    const companyName = companyNameFromString(req.query.company as string);
  }
);
blipAttendantRoutes.get(
  "/:company/blip/get-agents-productivity",
  [
    BlipAttendantMiddlewareValidate.queryValidate<GetAgentsProductivityRequestDto>(
      getAgentsProductivityRequestSchema
    ),
  ],
  (req: Request, res: Response) => {
    const companyName = companyNameFromString(req.query.company as string);
  }
);
blipAttendantRoutes.get(
  "/:company/blip/get-report-about-agents",
  [
    BlipAttendantMiddlewareValidate.queryValidate<GetReportAboutAgentsDto>(
      getReportAboutAgentsRequestSchema
    ),
  ],
  (req: Request, res: Response) => {
    const companyName = companyNameFromString(req.query.company as string);
  }
);
blipAttendantRoutes.post(
  "/:company/blip/add-agent",
  [BlipAttendantMiddlewareValidate.bodyValidate<AddAgentRequestDto>],
  (req: Request, res: Response) => {
    const companyName = companyNameFromString(req.query.company as string);
  }
);

blipAttendantRoutes.delete(
  "/:company/blip/delete",
  (req: Request, res: Response) => {
    const companyName = companyNameFromString(req.query.company as string);
  }
);

export default blipAttendantRoutes;
