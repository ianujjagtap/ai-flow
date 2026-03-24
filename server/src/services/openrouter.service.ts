import { env } from "@/config/env";
import type { AIResult } from "@/types";

interface OpenRouterMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

interface OpenRouterResponse {
  id: string;
  choices: Array<{
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
  }>;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export const askOpenRouter = async (prompt: string): Promise<AIResult> => {
  // build the openai-format message array
  const messages: OpenRouterMessage[] = [
    {
      role: "system",
      content: "You are a helpful assistant. Respond clearly and concisely.",
    },
    {
      role: "user",
      content: prompt,
    },
  ];

  const startTime = Date.now();

  // send request to the openrouter chat completions endpoint
  const response = await fetch(`${env.OPENROUTER_BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": env.CLIENT_ORIGIN,
      "X-Title": "AI Flow App",
    },
    body: JSON.stringify({
      model: env.OPENROUTER_MODEL,
      messages,
    }),
  });

  const durationMs = Date.now() - startTime;

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`OpenRouter API error ${response.status}: ${errorBody}`);
  }

  const data = (await response.json()) as OpenRouterResponse;
  const content = data.choices?.[0]?.message?.content;

  if (!content) {
    throw new Error("OpenRouter returned an empty response");
  }

  return {
    content,
    model: env.OPENROUTER_MODEL,
    durationMs,
    usage: data.usage,
  };
};
