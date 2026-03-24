import type { NextFunction, Request, Response } from "express";
import { saveFlow, getAllFlows } from "@/services/flow.service";
import { MESSAGES, STATUS_CODES } from "@/utils/constants";
import { successResponse } from "@/utils/response";
import { catchAsync } from "@/utils/catch-async";

export const save = catchAsync(async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
  const { prompt, response, model: modelName, durationMs } = req.body as {
    prompt: string;
    response: string;
    model: string;
    durationMs: number;
  };
  
  // persist the completed flow to mongodb
  const flow = await saveFlow(prompt, response, modelName, durationMs);
  
  successResponse(res, MESSAGES.FLOW.SAVED, flow, STATUS_CODES.CREATED);
});

export const getAll = catchAsync(async (_req: Request, res: Response, _next: NextFunction): Promise<void> => {
  // fetch the most recent 50 flows
  const flows = await getAllFlows();
  
  successResponse(res, MESSAGES.FLOW.FETCHED, flows, STATUS_CODES.OK);
});
