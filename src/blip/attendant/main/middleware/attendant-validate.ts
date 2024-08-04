import { genericSafeSchemaParser } from "@/shared/zod-parser";
import { NextFunction, Request, Response } from "express";
import { addAgentRequestSchema } from "./attendant-schemas";
import { ZodSchema } from "zod";

export class BlipAttendantMiddlewareValidate {
  static bodyValidate<Schema>(req: Request, res: Response, next: NextFunction) {
    const obj = { ...req.body } as Schema;
    const schema = genericSafeSchemaParser(addAgentRequestSchema, obj);
    if (schema.success) return next();

    return res.status(400).end({ ...schema.error });
  }

  static queryValidate<Schema>(inputSchema: ZodSchema<Schema>) {
    return (req: Request, res: Response, next: NextFunction) => {
      const data = { ...req.query } as any;
      const schema = genericSafeSchemaParser<Schema>(inputSchema, data);
      if (schema.success) return next();

      return res.status(400).end({ ...schema.error });
    };
  }
}
