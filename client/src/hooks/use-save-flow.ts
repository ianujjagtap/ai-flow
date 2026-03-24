import { toast } from "sonner";
import { ENDPOINTS } from "@/api/endpoints";
import { useApi } from "@/hooks/use-api";
import type { FlowRecord } from "@/interfaces";
import { useFlowStore } from "@/store/flow-store";

export function useSaveFlow() {
  const { prompt, response, model, durationMs, isSaved, status, markSaved } = useFlowStore();
  const { execute, loading } = useApi<FlowRecord>();

  // only allow saving after a successful run that hasn't been saved yet
  const canSave = status === "success" && !isSaved && !!response;

  async function save() {
    if (!canSave) return;

    const toastId = toast.loading("Saving...");

    try {
      await execute({
        endpoint: ENDPOINTS.FLOWS.BASE,
        method: "POST",
        body: { prompt, response, model, durationMs },
      });
      markSaved();
      toast.success("Saved!", { id: toastId });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Save failed";
      toast.error(msg, { id: toastId });
    }
  }

  return { save, canSave, saving: loading };
}
