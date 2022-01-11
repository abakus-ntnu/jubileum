import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { TimelineEvent, TimelineEventModel } from "models/schema";
import { url } from "pages/api/_db";

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
    case "PUT":
      {
        if (headers.password !== process.env.POST_PASSWORD) {
          res.status(401).end();
          return;
        }
        const requestEvent = req.body as TimelineEvent;
        if (requestEvent._id){
          await TimelineEventModel.findOneAndUpdate({ _id: requestEvent._id as mongoose.Types.ObjectId }, requestEvent, {
            upsert: true,
          });
          res.status(200).send("");
          break;
        }
      }
    // eslint-disable-next-line no-fallthrough
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
