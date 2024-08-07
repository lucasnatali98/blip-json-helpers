import {
  CompanyName,
  companyNameFromString,
} from "@/core/domain/data/value-object/company";
import container from "@/cross/container";
import { Router, Request, Response } from "express";

const blipContactRouter = Router();

blipContactRouter.get(
  "/:company/get-contact",
  (req: Request, res: Response) => {
    const companyName = companyNameFromString(req.query.company as string);
    container[companyName].blipContactController().getContact(req, res);
  }
);

blipContactRouter.post("/add-contact", (req: Request, res: Response) => {
  res.end("Contact added");
});

blipContactRouter.patch("/update-contact", (req: Request, res: Response) => {});
blipContactRouter.get("/get-contacts", (req: Request, res: Response) => {});

export default blipContactRouter;
