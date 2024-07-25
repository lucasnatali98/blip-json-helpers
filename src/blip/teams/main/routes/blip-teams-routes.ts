import { Router, Request, Response } from "express";

const blipTeamsRouter = Router();

blipTeamsRouter.get("/get-all-teams", (req: Request, res: Response) => {
  res.send("Hello from Blip Teams Router");
});

blipTeamsRouter.get(
  "/get-report-about-teams",
  (req: Request, res: Response) => {}
);
blipTeamsRouter.get("/get-teams-metrics", (req: Request, res: Response) => {});

export default blipTeamsRouter;
