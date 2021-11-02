import mongoose, { model, Schema } from "mongoose";

delete mongoose.connection.models["TimelineEvent"];

export interface TimelineEvent {
  title: string;
  description: string;
  date: string;
}

const schema = new Schema<TimelineEvent>({
  title: { type: String, default: "" },
  description: { type: String, default: "" },
  date: { type: String, default: "" },
});

export const TimelineEventModel = model<TimelineEvent>("TimelineEvent", schema);
