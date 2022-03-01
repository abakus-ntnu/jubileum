import mongoose, { Schema } from "mongoose";

delete mongoose.connection.models["participant"];

export interface Participant extends Partial<mongoose.Document<string>> {
  name: string;
  totalScore: number;
}
const ParticipantSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: (name: string) => name.indexOf(" ") != -1,
      message: "Vennligst skriv inn fornavn og etternavn",
    },
  },
  totalScore: Number,
});
export const ParticipantModel = mongoose.model<Participant>(
  "participant",
  ParticipantSchema
);

delete mongoose.connection.models["competition"];

export interface Competition extends Partial<mongoose.Document> {
  name: string;
}
const CompetitionSchema = new Schema({
  name: {
    type: String,
  },
});
export const CompetitionModel = mongoose.model<Competition>(
  "competition",
  CompetitionSchema
);

delete mongoose.connection.models["score"];

export interface Score extends Partial<mongoose.Document> {
  UID: string[];
  CID: string;
  score: number;
}
const ScoreSchema = new Schema({
  UID: {
    type: [{ type: Schema.Types.ObjectId, ref: "participant" }],
  },
  CID: {
    type: Schema.Types.ObjectId,
    ref: "competition",
  },
  score: {
    type: Number,
  },
});
export const ScoreModel = mongoose.model<Score>("score", ScoreSchema);
