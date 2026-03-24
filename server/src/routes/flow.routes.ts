import { Router } from "express";
import { z } from "zod";
import { save, getAll } from "@/controllers/flow.controller";
import { saveRateLimiter } from "@/middleware/rate-limiter.middleware";
import { validateRequest } from "@/middleware/validate.middleware";

const router = Router();

const saveSchema = z.object({
  body: z.object({
    prompt: z.string().min(1, "Prompt is required").max(2000, "Prompt too long"),
    response: z.string().min(1, "Response is required"),
    model: z.string().min(1, "Model is required"),
    durationMs: z.number().nonnegative("durationMs must be non-negative"),
  }),
});

router.post("/", saveRateLimiter, validateRequest(saveSchema), save);
router.get("/", getAll);

export default router;
