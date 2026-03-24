import { Toaster } from "sonner";
import { FlowCanvas } from "@/components/flow-canvas";
import { Toolbar } from "@/components/toolbar";

export default function App() {
  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-background">
      {/* Top bar */}
      <header className="flex shrink-0 items-center justify-center border-b bg-background/80 px-4 py-2 backdrop-blur-sm">
        <Toolbar />
      </header>

      {/* Full-height canvas */}
      <main className="flex-1 overflow-hidden">
        <FlowCanvas />
      </main>

      <Toaster richColors position="bottom-right" />
    </div>
  );
}
