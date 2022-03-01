import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { Competition, CompetitionModel } from "models/leaderboardSchema";
import { url } from "pages/api/_db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, headers } = req;
  await mongoose.connect(url);

  switch (method) {
    case "GET":
      res.status(200).json(await CompetitionModel.find({}));
      break;

    case "PUT":
      {
        if (headers.password !== process.env.POST_PASSWORD) {
          res.status(401).end();
          return;
        }
        const competition = new CompetitionModel(req.body as Competition);
        await competition.save();
        res.status(200).json(competition);
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method ?? "NO_METHOD"} Not Allowed`);
  }
}
