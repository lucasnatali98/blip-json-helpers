import { Router } from "express";

const blipTicketRouter = Router();

blipTicketRouter.get("", (req, res) => {
  res.send("Blip Ticket");
});

export default blipTicketRouter;
