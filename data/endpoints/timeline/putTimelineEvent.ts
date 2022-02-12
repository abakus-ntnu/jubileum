import { TimelineEvent } from "models/schema";

const putTimelineEvent = async (
  timelineEvent: TimelineEvent,
  password: string
) =>
  await fetch("/api/timelineEvents", {
    method: "PUT",
    headers: {
      password: password,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(timelineEvent),
  });

export default putTimelineEvent;
