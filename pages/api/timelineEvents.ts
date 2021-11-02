import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { TimelineEvent, TimelineEventModel } from "../../models/schema";
import { url } from "./_db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, headers } = req;

  await mongoose.connect(url);

  switch (method) {
    case "GET":
      res.status(200).json(await TimelineEventModel.find({}));
      break;
    case "POST":
      {
        if (headers.password !== process.env.POST_PASSWORD) {
          res.status(401).end();
          return;
        }
        const event = new TimelineEventModel(req.body as TimelineEvent);
        await event.save();
        res.status(200).json(event);
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method ?? "NO_METHOD"} Not Allowed`);
  }
}
