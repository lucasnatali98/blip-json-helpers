import { Router } from "express";
import blipAttendantRoutes from "./attendant/main/routes/attendant-routes";
import blipContactRouter from "./contacts/main/routes/contact-routes";
import blipTicketRouter from "./ticket/main/routes/blip-ticket-routes";
import blipEventTrackingRouter from "./event-tracking/main/routes/event-tracking-routes";
import blipTeamsRouter from "./teams/main/routes/blip-teams-routes";

const blipRoutes = Router();

blipRoutes.use("/attendant", blipAttendantRoutes);
blipRoutes.use("/contact", blipContactRouter);
blipRoutes.use("/ticket", blipTicketRouter);
blipRoutes.use("/event-tracking", blipEventTrackingRouter);
blipRoutes.use("/teams", blipTeamsRouter);

export default blipRoutes;
