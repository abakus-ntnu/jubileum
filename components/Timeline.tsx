import { TimelineEvent } from "models/schema";
import { VerticalTimeline } from "react-vertical-timeline-component";
import TimelineEventElement from "./TimelineEvent";

interface IProps {
  events: TimelineEvent[];
}

const Timeline = (props: IProps) => {
  return (
    <VerticalTimeline>
      {props.events
        .sort((a, b) => (a.date > b.date ? 1 : -1))
        .map((event, index) => (
          <TimelineEventElement key={index} {...event} />
        ))}
    </VerticalTimeline>
  );
};

export default Timeline;
