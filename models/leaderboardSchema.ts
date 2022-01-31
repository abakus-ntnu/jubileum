import mongoose, { model, Schema } from "mongoose";

delete mongoose.connection.models["participant"];

export interface Participant extends Partial<mongoose.Document> {
  name: string;
  totalScore: number;
}
const ParticipantSchema = new Schema({
  name: {
    type: String,
    required: [true, "Vennligst skriv inn navn."],
    validate: {
      validator: (name: string) => name.indexOf(" ") != -1,
      message: "Vennligst skriv inn fornavn og etternavn",
    },
    totalScore: Number,
  },
});
export const ParticipantModel = mongoose.model(
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
    required: [true, "Vennligst skriv inn navn på konkurransen."],
  },
});
export const CompetitionModel = mongoose.model(
  "competition",
  CompetitionSchema
);

delete mongoose.connection.models["score"];

export interface Score extends Partial<mongoose.Document> {
  UID: string;
  CID: string;
  score: number;
}
const ScoreSchema = new Schema({
  UID: {
    type: Schema.Types.ObjectId,
    ref: "participant",
    required: [true, "Noe gikk galt ved lagring av bruker"],
  },
  CID: {
    type: Schema.Types.ObjectId,
    ref: "competition",
    required: [true, "Mangler konkurranse"],
  },
  score: {
    type: Number,
    required: [true, "Mangler score på konkurranse"],
  },
});
export const ScoreModel = mongoose.model("score", ScoreSchema);
