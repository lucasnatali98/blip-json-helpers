import { ZodSchema } from "zod";

export const genericSafeSchemaParser = <SchemaType>(
  schema: ZodSchema<SchemaType>,
  data: any
) => {
  return schema.safeParse(data);
};
