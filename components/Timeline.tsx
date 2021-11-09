import { TimelineEvent } from "models/schema";
import { VerticalTimeline } from "react-vertical-timeline-component";
import useSWR from "swr";
import TimelineEventElement from "./TimelineEvent";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Timeline = () => {
  const { data: events, error } = useSWR<TimelineEvent[], unknown>(
    "/api/timelineEvents",
    fetcher,
    {
      refreshInterval: 5000,
    }
  );

  if (error) return <div>Failed to load</div>;
  if (!events) return <div>Loading...</div>;

  return (
    <VerticalTimeline>
      {events
        .sort((a, b) => (a.date > b.date ? 1 : -1))
        .map((event, index) => (
          <TimelineEventElement
            key={index}
            event={event}
            defaultExpanded={index === 0}
          />
        ))}
    </VerticalTimeline>
  );
};

export default Timeline;
