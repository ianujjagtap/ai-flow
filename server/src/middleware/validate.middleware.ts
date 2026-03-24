import type { NextFunction, Request, Response } from "express";
import { ZodError, type ZodSchema } from "zod";
import { STATUS_CODES } from "@/utils/constants";
import { errorResponse } from "@/utils/response";

export const validateRequest = (schema: ZodSchema) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await schema.parseAsync({ body: req.body, query: req.query, params: req.params });
      next();
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        // extract all zod issue messages and join them
        const errorMessages = error.issues.map((issue) => `${issue.path.join(".")}: ${issue.message}`).join(", ");
        errorResponse(res, errorMessages, STATUS_CODES.BAD_REQUEST);
      } else {
        next(error);
      }
    }
  };
};
