import { createApp } from "@/app";
import { connectDB } from "@/config/db";
import { env } from "@/config/env";

const start = async (): Promise<void> => {
  await connectDB();
  const app = createApp();
  app.listen(env.PORT, () => {
    console.log(`🚀 Server running on http://localhost:${env.PORT}`);
    console.log(`📦 Environment: ${env.NODE_ENV}`);
    console.log(`🤖 Model: ${env.OPENROUTER_MODEL}`);
  });
};

start();
