import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { ParticipantModel } from "models/leaderboardSchema";
import { url } from "pages/api/_db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  await mongoose.connect(url);

  switch (method) {
    case "GET":
      res
        .status(200)
        .json(
          await ParticipantModel.find({}).sort({ totalScore: -1 }).limit(10)
        );
      break;
  }
}
