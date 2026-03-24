import {
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  ReactFlow,
  type Edge,
  type Node,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import InputNode from "@/components/nodes/input-node";
import ResultNode from "@/components/nodes/result-node";

// register custom node components
const nodeTypes = {
  inputNode: InputNode,
  resultNode: ResultNode,
};

// two fixed nodes — prompt on the left, response on the right
const initialNodes: Node[] = [
  { id: "input-1", type: "inputNode", position: { x: 80, y: 160 }, data: {} },
  { id: "result-1", type: "resultNode", position: { x: 540, y: 160 }, data: {} },
];

// animated edge connecting the two nodes
const initialEdges: Edge[] = [
  {
    id: "edge-1",
    source: "input-1",
    target: "result-1",
    animated: true,
    style: { strokeWidth: 2, stroke: "oklch(0.45 0.18 264)" },
  },
];

export function FlowCanvas() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.3, maxZoom: 1.1 }}
        minZoom={0.4}
        maxZoom={2}
      >
        <Background variant={BackgroundVariant.Dots} gap={22} size={1.2} className="opacity-40" />
        <Controls className="overflow-hidden rounded-lg border shadow-sm" />
        <MiniMap nodeStrokeWidth={3} className="overflow-hidden rounded-lg border shadow-sm" />
      </ReactFlow>
    </div>
  );
}
