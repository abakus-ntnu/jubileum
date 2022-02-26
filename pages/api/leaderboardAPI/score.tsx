import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import {
  Participant,
  ParticipantModel,
  ScoreModel,
} from "models/leaderboardSchema";
import { url } from "pages/api/_db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, headers } = req;
  await mongoose.connect(url);

  switch (method) {
    case "PUT":
      {
        if (headers.password !== process.env.POST_PASSWORD) {
          res.status(401).end();
          return;
        }
        const competitionID: string = req.body.competition.name;
        const score: number = req.body.score.score;
        const participantNames = req.body.participant.map(
          (participant: { name: string }) => participant.name
        );
        const oldParticipants = await ParticipantModel.find({
          name: { $in: participantNames },
        });
        const oldParticipantsNames: string[] = [];
        const userIDs: string[] = [];

        oldParticipants.forEach((n: Participant) => {
          oldParticipantsNames.push(n.name);
        });

        for (const i of participantNames) {
          if (!oldParticipantsNames.includes(i)) {
            const newParticipant = new ParticipantModel({
              name: i,
              totalScore: 0,
            });
            await newParticipant.save();
          }
          await ParticipantModel.findOneAndUpdate(
            { name: i },
            { $inc: { totalScore: score } }
          );
          const user = await ParticipantModel.findOne({ name: i }).select({
            _id: 1,
          });
          userIDs.push(user._id.toString());
        }

        const newScore = new ScoreModel({
          UID: userIDs,
          CID: competitionID,
          score: score,
        });
        await newScore.save();
      }
      res.status(200).json("KU");
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method ?? "NO_METHOD"} Not Allowed`);
  }
}
