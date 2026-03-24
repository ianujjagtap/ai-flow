export interface OpenRouterUsage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}

export interface AIResult {
  content: string;
  model: string;
  durationMs: number;
  usage: OpenRouterUsage;
}
