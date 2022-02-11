import Image from "next/image";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import React, { Key } from "react";

interface IProps {
  key?: Key;
}

const TimelineLoadingElement = ({ key }: IProps) => {
  return (
    <VerticalTimelineElement
      key={key}
      date={"loading..."}
      icon={
        <Image src="/abakule.png" alt="Abakule" height="100px" width="100px" />
      }
    />
  );
};

export default TimelineLoadingElement;
