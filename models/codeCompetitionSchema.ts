import mongoose, { model, Schema } from "mongoose";

delete mongoose.connection.models["DailyCompetition"];

export interface DailyCompetition extends Partial<mongoose.Document> {
  title: string;
  description: string;
  date: string;
  index: number;
}

const schema = new Schema<DailyCompetition>({
  title: { type: String, default: "" },
  description: { type: String, default: "" },
  date: { type: String, default: "" },
  index: { type: Number, default: 0 },
});

export const DailyCompetitionModel = model<DailyCompetition>(
  "DailyCompetition",
  schema
);
