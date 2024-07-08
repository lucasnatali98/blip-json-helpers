import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { Request, Response } from "express";
const app = express();
const port = process.env.PORT ?? 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});