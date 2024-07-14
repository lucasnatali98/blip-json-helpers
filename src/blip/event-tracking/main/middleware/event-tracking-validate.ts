import { ZodError, ZodSchema } from "zod";
import { Request, Response, NextFunction } from "express";
export class EventTrackingMiddleware {
  static validate(schema: ZodSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
      try {
        schema.parse({
          body: req.body,
          query: req.query,
          params: req.params,
        });
        next();
      } catch (error) {
        if (error instanceof ZodError) {
          res.status(400).json({
            message: "Validation error",
            issues: error.errors,
          });
        } else {
          next(error);
        }
      }
    };
  }
}
