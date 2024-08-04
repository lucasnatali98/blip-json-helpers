import { Router, Request, Response } from "express";

const blipContactRouter = Router();

blipContactRouter.get("/get-contact", (req: Request, res: Response) => {
  res.send("Hello from Blip Contact Router");
});

blipContactRouter.post("/add-contact", (req: Request, res: Response) => {
  res.end("Contact added");
});

blipContactRouter.patch("/update-contact", (req: Request, res: Response) => {});
blipContactRouter.get("/get-contacts", (req: Request, res: Response) => {});

export default blipContactRouter;
