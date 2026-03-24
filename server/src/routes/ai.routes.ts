import { Router } from "express";
import { z } from "zod";
import { askAI } from "@/controllers/ai.controller";
import { aiRateLimiter } from "@/middleware/rate-limiter.middleware";
import { validateRequest } from "@/middleware/validate.middleware";

const router = Router();

const askSchema = z.object({
  body: z.object({
    prompt: z.string().min(1, "Prompt cannot be empty").max(2000, "Prompt too long"),
  }),
});

router.post("/ask", aiRateLimiter, validateRequest(askSchema), askAI);

export default router;
