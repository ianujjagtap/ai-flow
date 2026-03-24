// status of a single flow run
export type FlowStatus = "idle" | "loading" | "success" | "error";

// shape of the global zustand store
export interface FlowState {
  prompt: string;
  response: string;
  model: string;
  durationMs: number;
  status: FlowStatus;
  isSaved: boolean;
  error: string | null;

  setPrompt: (prompt: string) => void;
  setResult: (response: string, model: string, durationMs: number) => void;
  setStatus: (status: FlowStatus) => void;
  setError: (error: string | null) => void;
  markSaved: () => void;
  reset: () => void;
}

// options accepted by the useApi execute function
export interface ApiOptions {
  endpoint: string;
  method?: string;
  body?: unknown;
  params?: Record<string, string>;
}
