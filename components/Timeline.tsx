import { TimelineEvent } from "models/schema";
import {
  VerticalTimeline,
} from "react-vertical-timeline-component";
import useSWR from "swr";
import TimelineEventElement from "./TimelineEvent";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Timeline = ({
  adminPassword,
  onEditClick,
}: {
  adminPassword?: string;
  onEditClick?: (event: TimelineEvent) => void;
}) => {
  const { data: events, error } = useSWR<TimelineEvent[], unknown>(
    "/api/timelineEvents",
    fetcher,
    {
      refreshInterval: 5000,
    }
  );

  if (error) return <div>Failed to load</div>;
  if (!events) return <div>Loading...</div>;

  events.sort((a, b) => (a.date > b.date ? 1 : -1))

  return (
    <VerticalTimeline>
      {events.map((event, index) => (
          <TimelineEventElement
            key={index}
            event={event}
            defaultExpanded={index === 0}
            adminPassword={adminPassword}
            onEditClick={onEditClick}
          />
        ))}
    </VerticalTimeline>
  );
};

export default Timeline;
