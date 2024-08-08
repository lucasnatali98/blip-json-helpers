import { companyNameFromString } from "@/core/domain/data/value-object/company";
import { Request, Router, Response } from "express";

const blipEventTrackingRouter = Router();

blipEventTrackingRouter.get(
  "/:company/blip/get-categories",
  (req: Request, res: Response) => {
    const companyName = companyNameFromString(req.query.company as string);
  }
);

blipEventTrackingRouter.post(
  "/:company/blip/create-event-with-contact",
  (req: Request, res: Response) => {
    const companyName = companyNameFromString(req.query.company as string);
  }
);

blipEventTrackingRouter.get(
  "/:company/blip/get-event-details",
  (req: Request, res: Response) => {
    const companyName = companyNameFromString(req.query.company as string);
  }
);

blipEventTrackingRouter.get(
  "/:company/blip/get-events",
  (req: Request, res: Response) => {
    const companyName = companyNameFromString(req.query.company as string);
  }
);

blipEventTrackingRouter.post(
  "/:company/blip/delete-event-category",
  (req: Request, res: Response) => {
    const companyName = companyNameFromString(req.query.company as string);
  }
);

export default blipEventTrackingRouter;
