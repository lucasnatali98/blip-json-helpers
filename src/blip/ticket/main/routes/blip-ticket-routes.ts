import { companyNameFromString } from "@/core/domain/data/value-object/company";
import container from "@/cross/container";
import { Router } from "express";

const blipTicketRouter = Router();

blipTicketRouter.get("/:company/blip/get-ticket", (req, res) => {
  const companyName = companyNameFromString(req.query.company as string);
  container[companyName]
    .blipTicketController()
    .get({
      ticketId: req.query.ticketId as string,
    })
    .then((response) => {
      return res.status(response.statusCode).json(response.body);
    })
    .catch((error) => {});
});

blipTicketRouter.post("/:company/blip/create-ticket", (req, res) => {
  const companyName = companyNameFromString(req.query.company as string);
  container[companyName]
    .blipTicketController()
    .createTicket({
      customerIdentity: req.body.customerIdentity,
    })
    .then((response) => {
      res.status(response.statusCode).json(response.body);
    })
    .catch((error) => {
      res.status(error.status).end(error);
    });
});

blipTicketRouter.get("/:company/blip/get-all-tickets", (req, res) => {
  const companyName = companyNameFromString(req.query.company as string);
  container[companyName]
    .blipTicketController()
    .getAllBotTickets({
      skip: 0,
      take: 10,
      $filter: "",
    })
    .then((response) => {
      res.status(response.statusCode).json(response.body);
    })
    .catch((error) => {
      res.status(error.status).end(error);
    });
});

blipTicketRouter.get("/:company/blip/get-report-about-tickets", (req, res) => {
  const companyName = companyNameFromString(req.query.company as string);
  container[companyName]
    .blipTicketController()
    .getReportAboutTickets({
      beginDate: req.query.beginDate as string,
      endDate: req.query.endDate as string,
    })
    .then((response) => {
      res.status(response.statusCode).json(response.body);
    })
    .catch((error) => {
      res.status(error.status).end(error);
    });
});

export default blipTicketRouter;
