import {
  CompanyName,
  companyNameFromString,
} from "@/core/domain/data/value-object/company";
import container from "@/cross/container";
import { Router, Request, Response } from "express";

const blipContactRouter = Router();

blipContactRouter.get(
  "/:company/blip/get-contact",
  (req: Request, res: Response) => {
    const companyName = companyNameFromString(req.query.company as string);
    container[companyName].blipContactController().get(req.params.id);
  }
);

blipContactRouter.post(
  "/:company/blip/add-contact",
  (req: Request, res: Response) => {
    const companyName = companyNameFromString(req.query.company as string);
  }
);

blipContactRouter.patch(
  "/:company/blip/update-contact",
  (req: Request, res: Response) => {
    const companyName = companyNameFromString(req.query.company as string);
  }
);
blipContactRouter.get(
  "/:company/blip/get-contacts",
  (req: Request, res: Response) => {
    const companyName = companyNameFromString(req.query.company as string);
  }
);

export default blipContactRouter;
