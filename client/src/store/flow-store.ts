import { create } from "zustand";
import type { FlowState } from "@/types";

const initial = {
  prompt: "",
  response: "",
  model: "",
  durationMs: 0,
  status: "idle" as const,
  isSaved: false,
  error: null,
};

export const useFlowStore = create<FlowState>((set) => ({
  ...initial,

  // update prompt and mark as unsaved
  setPrompt: (prompt) => set({ prompt, isSaved: false }),

  // store the ai result and mark as unsaved
  setResult: (response, model, durationMs) =>
    set({ response, model, durationMs, isSaved: false }),

  setStatus: (status) => set({ status }),

  setError: (error) => set({ error }),

  markSaved: () => set({ isSaved: true }),

  // wipe everything back to the starting state
  reset: () => set(initial),
}));
