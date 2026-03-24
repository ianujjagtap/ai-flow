import type { NextFunction, Request, Response } from "express";
import { env } from "@/config/env";
import { MESSAGES, STATUS_CODES } from "@/utils/constants";
import { errorResponse } from "@/utils/response";

export const errorMiddleware = (
  err: Error & { statusCode?: number },
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  // log the stack trace internally
  console.error(err.stack);

  if (env.NODE_ENV === "development") {
    console.error("[error details]", err.message);
  }

  const statusCode = err.statusCode ?? STATUS_CODES.INTERNAL_SERVER_ERROR;
  const message = err.message || MESSAGES.ERROR.INTERNAL_SERVER_ERROR;

  errorResponse(res, message, statusCode);
};
