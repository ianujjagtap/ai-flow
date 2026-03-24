import { memo } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useFlowStore } from "@/store/flow-store";

const InputNode = memo(({ selected }: NodeProps) => {
  const { prompt, setPrompt, status } = useFlowStore();

  return (
    <div
      className={cn(
        "w-80 rounded-xl border bg-card p-4 shadow-md transition-all duration-200",
        selected && "ring-2 ring-primary ring-offset-2" // highlight when selected on canvas
      )}
    >
      {/* node label */}
      <div className="mb-2 flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-primary" />
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Prompt
        </span>
      </div>

      <Textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask anything..."
        className="min-h-[110px] resize-none text-sm leading-relaxed"
        disabled={status === "loading"} // lock input while the ai is working
        maxLength={2000}
      />

      <p className="mt-1.5 text-right text-xs text-muted-foreground">{prompt.length} / 2000</p>

      {/* connection handle — line goes out from the right side */}
      <Handle
        type="source"
        position={Position.Right}
        className="!h-3 !w-3 !border-2 !border-primary !bg-background"
      />
    </div>
  );
});

InputNode.displayName = "InputNode";
export default InputNode;
