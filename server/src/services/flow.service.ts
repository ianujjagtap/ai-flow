import { Flow, type IFlow } from "@/models/flow.model";

export const saveFlow = async (
  prompt: string,
  response: string,
  modelName: string,
  durationMs: number
): Promise<IFlow> => {
  // create and save a new flow document
  const flow = new Flow({ prompt, response, modelName, durationMs });
  return flow.save();
};

export const getAllFlows = async (): Promise<IFlow[]> => {
  // returns the 50 most recent flows, fastest query possible using lean()
  return Flow.find().sort({ createdAt: -1 }).limit(50).lean().exec() as unknown as Promise<IFlow[]>;
};
