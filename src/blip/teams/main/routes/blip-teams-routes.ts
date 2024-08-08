import { companyNameFromString } from "@/core/domain/data/value-object/company";
import { Router, Request, Response } from "express";

const blipTeamsRouter = Router();

blipTeamsRouter.get(
  "/:company/blip/get-all-teams",
  (req: Request, res: Response) => {
    const companyName = companyNameFromString(req.query.company as string);
  }
);

blipTeamsRouter.get(
  "/:company/blip/get-report-about-teams",
  (req: Request, res: Response) => {
    const companyName = companyNameFromString(req.query.company as string);
  }
);
blipTeamsRouter.get(
  "/:company/blip/get-teams-metrics",
  (req: Request, res: Response) => {
    const companyName = companyNameFromString(req.query.company as string);
  }
);

export default blipTeamsRouter;
