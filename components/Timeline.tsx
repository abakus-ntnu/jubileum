import { TimelineEvent } from "models/schema";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import useSWR from "swr";
import TimelineEventElement from "./TimelineEvent";
import Image from "next/image";
import styles from "../styles/TimelineEvent.module.css";
import React from "react";

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
  if (!events) {
    return (
      <VerticalTimeline>
        {Array.from({ length: 1 }, (x, i) => i).map((i) => (
          <VerticalTimelineElement
            key={i}
            date={"loading..."}
            icon={
              <Image
                src="/abakule.png"
                className={styles.timelineIcon}
                alt=""
                height="100px"
                width="100px"
              />
            }
          />
        ))}
        <div style={{ height: "100vh" }} />
      </VerticalTimeline>
    );
  }

  events.sort((a, b) => (a.date > b.date ? 1 : -1));

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
