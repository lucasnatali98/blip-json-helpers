import { Router } from "express";

const blipContactRouter = Router();

blipContactRouter.get("/", (req, res) => {
  res.send("Hello from Blip Contact Router");
});

export default blipContactRouter;
