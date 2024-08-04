import express from "express";
import { Request, Response } from "express";
const app = express();
app.get("/", (req: Request, res: Response) => {
  res.end("Blip ERP - v.0.0");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default app;
