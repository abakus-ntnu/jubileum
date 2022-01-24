import mongoose, { model, Schema } from "mongoose";

delete mongoose.connection.models["TimelineEvent"];

export interface TimelineEvent extends Partial<mongoose.Document> {
  title: string;
  description: string;
  date: string;
  index: number;
}

const schema = new Schema<TimelineEvent>({
  title: { type: String, default: "" },
  description: { type: String, default: "" },
  date: { type: String, default: "" },
  index: { type: Number, default: 0 },
});

export const TimelineEventModel = model<TimelineEvent>("TimelineEvent", schema);
