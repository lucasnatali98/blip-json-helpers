import { companyNameFromString } from "@/core/domain/data/value-object/company";
import container from "@/cross/container";
import { Router, Request, Response } from "express";

const blipTeamsRouter = Router();

blipTeamsRouter.get(
  "/:company/blip/get-all-teams",
  (req: Request, res: Response) => {
    const companyName = companyNameFromString(req.query.company as string);
    container[companyName]
      .blipTeamsController()
      .getAllTeams()
      .then((response) => {
        res.status(response.statusCode).json(response.body);
      })
      .catch((error) => {
        res.status(error.status).end({ error });
      });
  }
);

blipTeamsRouter.get(
  "/:company/blip/get-report-about-teams",
  (req: Request, res: Response) => {
    const companyName = companyNameFromString(req.query.company as string);
    container[companyName]
      .blipTeamsController()
      .getReportAboutTeams({
        beginDate: req.query.beginDate as string,
        endDate: req.query.endDate as string,
      })
      .then((response) => {
        res.status(response.statusCode).json(response.body);
      })
      .catch((error) => {
        res.status(error.status).end({ error });
      });
  }
);
blipTeamsRouter.get(
  "/:company/blip/get-teams-metrics",
  (req: Request, res: Response) => {
    const companyName = companyNameFromString(req.query.company as string);
    container[companyName]
      .blipTeamsController()
      .getTeamsMetrics()
      .then((response) => {
        res.status(response.statusCode).json(response.body);
      })
      .catch((error) => {
        res.status(error.status).end({ error });
      });
  }
);

export default blipTeamsRouter;
