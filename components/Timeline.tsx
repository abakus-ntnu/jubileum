import { TimelineEvent } from "models/schema";
import { VerticalTimeline } from "react-vertical-timeline-component";
import useSWR from "swr";
import TimelineEventElement from "./TimelineEvent";
import React from "react";
import TimelineLoadingElement from "./TimelineLoadingElement";

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

  if (error)
    return (
      <div style={{ color: "red", textAlign: "center" }}>Failed to load</div>
    );

  return (
    <VerticalTimeline>
      {events ? (
        events
          .sort((a, b) => (a.index > b.index ? 1 : -1))
          .map((event, index) => (
            <TimelineEventElement
              key={index}
              event={event}
              defaultExpanded={index === 0}
              adminPassword={adminPassword}
              onEditClick={onEditClick}
            />
          ))
      ) : (
        <TimelineLoadingElement />
      )}
    </VerticalTimeline>
  );
};

export default Timeline;
