import type { Response } from "express";

// standard envelope for all successful api responses
export const successResponse = (
  res: Response,
  message: string,
  data: unknown = null,
  status = 200
): void => {
  res.status(status).json({ success: true, message, data });
};

// standard envelope for all error api responses
export const errorResponse = (res: Response, message: string, status = 400): void => {
  res.status(status).json({ success: false, message });
};
