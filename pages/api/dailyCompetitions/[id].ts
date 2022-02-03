import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { DailyCompetitionModel } from "models/codeCompetitionSchema";
import { url } from "pages/api/_db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, headers, query } = req;

  await mongoose.connect(url);

  switch (method) {
    case "DELETE":
      {
        if (headers.password !== process.env.POST_PASSWORD) {
          res.status(401).end();
          return;
        }
        await DailyCompetitionModel.deleteOne({ _id: query.id as string });
        res.status(200);
      }
      break;
    case "GET":
      {
        if (headers.password !== process.env.POST_PASSWORD) {
          res.status(401).end();
          return;
        }
        await DailyCompetitionModel.findOne({ _id: query.id as string });
      }
      break;
    default:
      res.setHeader("Allow", ["DELETE", "GET"]);
      res.status(405).end(`Method ${method ?? "NO_METHOD"} Not Allowed`);
  }
}
