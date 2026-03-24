import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { env } from "@/config/env";
import { errorMiddleware } from "@/middleware/error.middleware";
import routes from "@/routes";

export const createApp = () => {
  const app = express();

  // security headers
  app.use(helmet());

  // cors — restrict access to the assigned client
  app.use(
    cors({
      origin: env.CLIENT_ORIGIN,
      methods: ["GET", "POST"],
      allowedHeaders: ["Content-Type"],
    })
  );

  // body parsing — limit payload weight to prevent abuse
  app.use(express.json({ limit: "10kb" }));

  // http request logging (skipped during tests)
  if (env.NODE_ENV !== "test") {
    app.use(morgan("dev"));
  }

  // health check — ping endpoint to verify uptime
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", environment: env.NODE_ENV });
  });

  // map all api routes
  app.use("/api", routes);

  // global error handler — must be registered last
  app.use(errorMiddleware);

  return app;
};
