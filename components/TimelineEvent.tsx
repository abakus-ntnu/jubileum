import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styles from "styles/TimelineEvent.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { TimelineEvent } from "models/schema";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import abakule from "assets/timelineImages/abakule.png";
import kronikenKule from "assets/timelineImages/krøniken.png";

interface IProps {
  event: TimelineEvent;
  defaultExpanded?: boolean;
  onEditClick?: () => void;
  onDeleteClick?: () => void;
}

const TimelineEventElement = ({
  event,
  defaultExpanded,
  onEditClick,
  onDeleteClick,
}: IProps) => {
  const [open, setOpen] = useState(false);

  return (
    <VerticalTimelineElement
      key={event.title}
      contentStyle={{
        borderTop: "3px solid #E10C16",
        background: "#FFFFFF",
        padding: 5,
      }}
      onTimelineElementClick={() => setOpen(!open)}
      contentArrowStyle={{ borderRight: "7px solid #FFFFFF" }}
      date={event.date}
      iconStyle={{ background: "#E20F13" }}
      icon={
        <Image
          src={event.tags.includes("krøniken") ? kronikenKule : abakule}
          className={styles.timelineIcon}
          alt=""
          height="100px"
          width="100px"
        />
      }
    >
      <Accordion
        defaultExpanded={defaultExpanded}
        variant="elevation"
        elevation={0}
        className={styles.accordion}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h3 className="vertical-timeline-element-title">{event.title}</h3>
          {onDeleteClick && (
            <button onClick={() => onDeleteClick()}>Delete</button>
          )}
          {onEditClick && <button onClick={() => onEditClick()}>Edit</button>}
          {onEditClick && `Index: ${event.index}`}
        </AccordionSummary>
        <AccordionDetails>
          <ReactMarkdown
            className={styles.markdownContent}
            remarkPlugins={[remarkGfm]}
          >
            {event.description}
          </ReactMarkdown>
        </AccordionDetails>
      </Accordion>
    </VerticalTimelineElement>
  );
};

export default TimelineEventElement;
