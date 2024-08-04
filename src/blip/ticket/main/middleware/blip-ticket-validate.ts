export class BlipTicketMiddlewareValidate {
  static validate(schema: any) {
    return (req: any, res: any, next: any) => {
      try {
        schema.parse(req.body);
        next();
      } catch (error: any) {
        res.status(400).json({ message: error.errors });
      }
    };
  }
}
