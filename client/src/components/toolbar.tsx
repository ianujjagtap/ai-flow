import { Loader2, Play, RotateCcw, Save, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useRunFlow } from "@/hooks/use-run-flow";
import { useSaveFlow } from "@/hooks/use-save-flow";
import { useFlowStore } from "@/store/flow-store";

export function Toolbar() {
  const { run, running } = useRunFlow();
  const { save, canSave, saving } = useSaveFlow();
  const { reset, isSaved, status } = useFlowStore();

  return (
    <div className="flex items-center gap-3 rounded-xl border bg-card px-5 py-2.5 shadow-sm">
      {/* brand */}
      <div className="flex items-center gap-2">
        <Sparkles className="h-4 w-4 text-primary" />
        <span className="text-sm font-semibold tracking-tight">AI Flow</span>
      </div>

      {status === "success" && (
        <Badge variant="secondary" className="text-xs">
          Ready
        </Badge>
      )}

      <Separator orientation="vertical" className="mx-1 h-5" />

      {/* run the prompt through the ai */}
      <Button onClick={run} disabled={running} size="sm" className="gap-2">
        {running ? (
          <Loader2 className="h-3.5 w-3.5 animate-spin" />
        ) : (
          <Play className="h-3.5 w-3.5" />
        )}
        {running ? "Running..." : "Run Flow"}
      </Button>

      {/* save the result to the db */}
      <Button onClick={save} disabled={!canSave || saving} variant="outline" size="sm" className="gap-2">
        {saving ? (
          <Loader2 className="h-3.5 w-3.5 animate-spin" />
        ) : (
          <Save className="h-3.5 w-3.5" />
        )}
        {isSaved ? "Saved ✓" : "Save"}
      </Button>

      {/* clear everything back to idle */}
      <Button
        onClick={reset}
        variant="ghost"
        size="sm"
        className="gap-2 text-muted-foreground hover:text-foreground"
      >
        <RotateCcw className="h-3.5 w-3.5" />
        Reset
      </Button>
    </div>
  );
}
