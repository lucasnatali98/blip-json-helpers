import z from "zod";
import { Request, Response, NextFunction } from "express";
import { genericSafeSchemaParser } from "@/shared/zod-parser";
const blipGetReportAboutTeamsSchema = z.object({
  beginDate: z.string(),
  endDate: z.string(),
});

type BlipGetReportAboutTeams = z.infer<typeof blipGetReportAboutTeamsSchema>;

export class BlipTeamsMiddlewareValidate {}
