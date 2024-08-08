import { companyNameFromString } from "@/core/domain/data/value-object/company";
import { Router } from "express";

const blipTicketRouter = Router();

blipTicketRouter.get("/:company/blip/get-ticket", (req, res) => {
  const companyName = companyNameFromString(req.query.company as string);
});

blipTicketRouter.post("/:company/blip/create-ticket", (req, res) => {
  const companyName = companyNameFromString(req.query.company as string);
});

blipTicketRouter.get("/:company/blip/get-all-tickets", (req, res) => {
  const companyName = companyNameFromString(req.query.company as string);
});

blipTicketRouter.get("/:company/blip/get-report-about-tickets", (req, res) => {
  const companyName = companyNameFromString(req.query.company as string);
});

export default blipTicketRouter;
