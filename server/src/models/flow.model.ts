import { Schema, model, type Document, type Types } from "mongoose";

export interface IFlow extends Document {
  _id: Types.ObjectId;
  prompt: string;
  response: string;
  modelName: string;
  durationMs: number;
  createdAt: Date;
  updatedAt: Date;
}

const FlowSchema = new Schema<IFlow>(
  {
    prompt: {
      type: String,
      required: true,
      trim: true,
      maxlength: [2000, "Prompt cannot exceed 2000 characters"],
    },
    response: {
      type: String,
      required: true,
      trim: true,
    },
    modelName: {
      type: String,
      required: true,
    },
    durationMs: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

FlowSchema.index({ createdAt: -1 });

export const Flow = model<IFlow>("Flow", FlowSchema);
