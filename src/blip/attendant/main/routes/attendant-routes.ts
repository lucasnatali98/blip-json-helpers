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
const blipAttendantRoutes = Router();

blipAttendantRoutes.get(
  "/get-all-bot-agents",
  [
    BlipAttendantMiddlewareValidate.queryValidate<GetAllBotAgentsRequestDto>(
      getAllBotAgentsRequestSchema
    ),
  ],
  (req: Request, res: Response) => {}
);
blipAttendantRoutes.get(
  "/get-agents-productivity",
  [
    BlipAttendantMiddlewareValidate.queryValidate<GetAgentsProductivityRequestDto>(
      getAgentsProductivityRequestSchema
    ),
  ],
  (req: Request, res: Response) => {}
);
blipAttendantRoutes.get(
  "/get-report-about-agents",
  [
    BlipAttendantMiddlewareValidate.queryValidate<GetReportAboutAgentsDto>(
      getReportAboutAgentsRequestSchema
    ),
  ],
  (req: Request, res: Response) => {}
);
blipAttendantRoutes.post(
  "/add-agent",
  [BlipAttendantMiddlewareValidate.bodyValidate<AddAgentRequestDto>],
  (req: Request, res: Response) => {}
);

blipAttendantRoutes.delete("/delete", (req: Request, res: Response) => {});

export default blipAttendantRoutes;
