import { memo } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import { Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useFlowStore } from "@/store/flow-store";

// maps the current status to the dot indicator color
const statusDot: Record<string, string> = {
  loading: "animate-pulse bg-yellow-500",
  success: "bg-green-500",
  error: "bg-destructive",
  idle: "bg-muted-foreground/40",
};

const ResultNode = memo(({ selected }: NodeProps) => {
  const { response, model, durationMs, status, error } = useFlowStore();

  return (
    <div
      className={cn(
        "w-96 rounded-xl border bg-card p-4 shadow-md transition-all duration-200",
        selected && "ring-2 ring-primary ring-offset-2"
      )}
    >
      {/* connection handle — line arrives from the left side */}
      <Handle
        type="target"
        position={Position.Left}
        className="!h-3 !w-3 !border-2 !border-primary !bg-background"
      />

      {/* header row: status dot + label + duration badge */}
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={cn("h-2 w-2 rounded-full transition-colors", statusDot[status])} />
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Response
          </span>
        </div>

        {status === "success" && model && (
          <Badge variant="secondary" className="text-xs font-mono">
            {durationMs}ms
          </Badge>
        )}
      </div>

      {/* response content area */}
      <div
        className={cn(
          "min-h-[130px] overflow-auto rounded-lg border bg-muted/40 p-3 transition-all",
          status === "error" && "border-destructive/30 bg-destructive/5"
        )}
      >
        {status === "loading" && (
          <div className="flex h-full min-h-[100px] items-center justify-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin text-primary" />
            <span>Generating response...</span>
          </div>
        )}

        {status === "error" && <p className="text-sm text-destructive">{error}</p>}

        {status === "success" && response && (
          <p className="whitespace-pre-wrap text-sm leading-relaxed">{response}</p>
        )}

        {status === "idle" && (
          <p className="text-sm italic text-muted-foreground/60">Response will appear here...</p>
        )}
      </div>

      {/* model name shown below the response */}
      {model && status === "success" && (
        <p className="mt-2 truncate text-xs text-muted-foreground">
          Model: <span className="font-mono">{model}</span>
        </p>
      )}
    </div>
  );
});

ResultNode.displayName = "ResultNode";
export default ResultNode;
