import logger from "@/shared/logger";
import { NextFunction, Request, Response } from "express";

import z, { ZodSchema } from "zod";
/**
 * Prototipos de adição de agentes (Atendentes)
 */
export const addAgentRequestSchema = z.object({});
export type AddAgentRequestDto = z.infer<typeof addAgentRequestSchema>;

/**
 * Prototipos de report about agents
 */
export const getReportAboutAgentsRequestSchema = z.object({});
export type GetReportAboutAgentsDto = z.infer<
  typeof getReportAboutAgentsRequestSchema
>;

const genericSchemaParser = <SchemaType, DataType>(
  schema: ZodSchema<SchemaType>,
  data: DataType
) => {
  try {
    const validate = schema.parse(data)
  } catch (error: any) {
    logger.error(error?.stack);
  }
};
export class BlipAttendantMiddlewareValidate {
  static bodyValidate<Schema>(req: Request, res: Response, next: NextFunction) {
    const obj = { ...req.body } as Schema;
  }

  static queryValidate<Schema>(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const obj = { ...req.query } as Schema;
  }
}
