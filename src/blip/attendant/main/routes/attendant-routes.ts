import { Router, Request, Response } from "express";

import {
  AddAgentRequestDto,
  BlipAttendantMiddlewareValidate,
} from "../middleware/attendant-validate";
const blipAttendantRoutes = Router();

blipAttendantRoutes.get(
  "/get-all-bot-agents",
  (req: Request, res: Response) => {}
);
blipAttendantRoutes.get(
  "/get-agents-productivity",
  (req: Request, res: Response) => {}
);
blipAttendantRoutes.get(
  "/get-report-about-agents",
  (req: Request, res: Response) => {}
);
blipAttendantRoutes.post(
  "/add-agent",
  [BlipAttendantMiddlewareValidate.bodyValidate<AddAgentRequestDto>],
  (req: Request, res: Response) => {}
);

blipAttendantRoutes.delete("/delete", (req: Request, res: Response) => {});

export default blipAttendantRoutes;
