import rateLimit from "express-rate-limit";

// prevents abuse of the openrouter api (max 10 reqs / min)
export const aiRateLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  message: {
    success: false,
    message: "Too many requests. Please wait a minute before trying again.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// prevents spamming the database with saves (max 30 reqs / min)
export const saveRateLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 30,
  message: {
    success: false,
    message: "Too many save requests. Please slow down.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});
