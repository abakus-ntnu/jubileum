import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { ScoreModel } from "models/leaderboardSchema";
import { url } from "pages/api/_db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query } = req;

  await mongoose.connect(url);

  switch (method) {
    case "GET": {
      res
        .status(200)
        .json(
          await ScoreModel.find({ UID: query })
            .populate("UID", "CID")
            .sort({ score: -1 })
        );
      break;
    }
  }
}
