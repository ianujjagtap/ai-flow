import { toast } from "sonner";
import { ENDPOINTS } from "@/api/endpoints";
import { useApi } from "@/hooks/use-api";
import type { AskAIData } from "@/interfaces";
import { useFlowStore } from "@/store/flow-store";

export function useRunFlow() {
  const { prompt, status, setResult, setStatus, setError } = useFlowStore();
  const { execute, loading } = useApi<AskAIData>();

  async function run() {
    if (!prompt.trim()) {
      toast.error("Please enter a prompt first");
      return;
    }

    // prevent double-submit
    if (status === "loading") return;

    setStatus("loading");
    setError(null);

    try {
      const result = await execute({
        endpoint: ENDPOINTS.AI.ASK,
        method: "POST",
        body: { prompt },
      });

      if (result) {
        setResult(result.response, result.model, result.durationMs);
        setStatus("success");
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong";
      setError(msg);
      setStatus("error");
      toast.error(msg);
    }
  }

  return { run, running: loading };
}
