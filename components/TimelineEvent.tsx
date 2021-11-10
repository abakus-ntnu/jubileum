import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styles from "styles/TimelineEvent.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { TimelineEvent } from "models/schema";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface IProps {
  event: TimelineEvent;
  defaultExpanded?: boolean;
}

const TimelineEventElement = ({ event, defaultExpanded }: IProps) => {
  const [open, setOpen] = useState(false);

  return (
    <VerticalTimelineElement
      key={event.title}
      className="vertical-timeline-element--work"
      contentStyle={{ background: "#E20F13", color: "#fff", padding: 5 }}
      onTimelineElementClick={() => setOpen(!open)}
      contentArrowStyle={{ borderRight: "7px solid  #E20F13" }}
      date={event.date}
      iconStyle={{ background: "#E20F13", color: "#fff" }}
      icon={
        <Image
          src="/abakule.png"
          className={styles.timelineIcon}
          alt=""
          height="100px"
          width="100px"
        />
      }
    >
      <Accordion
        defaultExpanded={defaultExpanded}
        className={styles.accordion}
        style={{ margin: 0 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className={styles.accordionSummary}
        >
          <h3 className="vertical-timeline-element-title">{event.title}</h3>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetails}>
          <ReactMarkdown className={styles.markdownContent} remarkPlugins={[remarkGfm]}>
            {event.description}
          </ReactMarkdown>
        </AccordionDetails>
      </Accordion>
    </VerticalTimelineElement>
  );
};

export default TimelineEventElement;
