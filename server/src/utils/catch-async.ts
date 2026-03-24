import type { NextFunction, Request, RequestHandler, Response } from "express";

// wraps async controller functions to automatically forward errors to the error middleware
export const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};
