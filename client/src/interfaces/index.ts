// shape of the ai response data
export interface AIUsage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}

export interface AskAIData {
  response: string;
  model: string;
  durationMs: number;
  usage: AIUsage;
}

// body sent when saving a flow to the db
export interface SaveFlowRequest {
  prompt: string;
  response: string;
  model: string;
  durationMs: number;
}

// a single saved flow document from the db
export interface FlowRecord {
  _id: string;
  prompt: string;
  response: string;
  model: string;
  durationMs: number;
  createdAt: string;
  updatedAt: string;
}
