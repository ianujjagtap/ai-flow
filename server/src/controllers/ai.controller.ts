import type { NextFunction, Request, Response } from "express";
import { askOpenRouter } from "@/services/openrouter.service";
import { MESSAGES, STATUS_CODES } from "@/utils/constants";
import { successResponse } from "@/utils/response";
import { catchAsync } from "@/utils/catch-async";

export const askAI = catchAsync(async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
  const { prompt } = req.body as { prompt: string };
  
  // fetch response from openrouter
  const result = await askOpenRouter(prompt);
  
  // send standardized success response back to client
  successResponse(
    res,
    MESSAGES.AI.SUCCESS,
    {
      response: result.content,
      model: result.model,
      durationMs: result.durationMs,
      usage: result.usage,
    },
    STATUS_CODES.OK
  );
});
