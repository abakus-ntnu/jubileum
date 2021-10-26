import React, { useState } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import TimelineEvent, { TimelineEventProps } from "./TimelineEvent";

interface IProps {
  events: TimelineEventProps[];
}

const Timeline = (props: IProps) => {
  return (
    <VerticalTimeline>
      {props.events.map((event) => (
        <TimelineEvent {...event} />
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
