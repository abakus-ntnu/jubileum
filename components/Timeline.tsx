import { VerticalTimeline } from "react-vertical-timeline-component";
import TimelineEvent, { TimelineEventProps } from "./TimelineEvent";

interface IProps {
  events: TimelineEventProps[];
}

const Timeline = (props: IProps) => {
  return (
    <VerticalTimeline>
      {props.events.map((event, index) => (
        <TimelineEvent key={index} {...event} />
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
