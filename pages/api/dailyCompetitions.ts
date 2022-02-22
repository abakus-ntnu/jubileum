import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import {
  DailyCompetition,
  DailyCompetitionModel,
} from "models/codeCompetitionSchema";
import { url } from "pages/api/_db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, headers } = req;

  await mongoose.connect(url);

  switch (method) {
    case "GET":
      res.status(200).json(await DailyCompetitionModel.find({}));
      break;
    case "PUT":
      {
        if (headers.password !== process.env.POST_PASSWORD) {
          res.status(401).end();
          return;
        }
        const requestCompetition = req.body as DailyCompetition;
        if (requestCompetition._id) {
          await DailyCompetitionModel.findOneAndUpdate(
            { _id: requestCompetition._id as mongoose.Types.ObjectId },
            requestCompetition,
            {
              upsert: true, // insert rows into a database table if they do not already exist, or update them if they do
            }
          );
          res.status(200).send("");
        }
      }
      break;
    case "POST":
      {
        if (headers.password !== process.env.POST_PASSWORD) {
          res.status(401).end();
          return;
        }
        const competition = new DailyCompetitionModel(
          req.body as DailyCompetition
        );
        await competition.save();
        res.status(200).json(competition);
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST, PUT"]);
      res.status(405).end(`Method ${method ?? "NO_METHOD"} Not Allowed`);
  }
}
