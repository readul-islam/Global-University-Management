import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodSchema } from "zod";

const validator = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    let data = {};

    if (req.method === "GET" || req.method === "DELETE") data = req.query;
    if (req.method === "POST" || req.method === "PUT" || req.method === "PATCH")
      data = req.body;
    await schema.parseAsync(data);

    next();
  };
};
export default validator;
