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
  adminPassword?: string;
  onEditClick?: (event: TimelineEvent) => void;
}

const TimelineEventElement = ({
  event,
  defaultExpanded,
  adminPassword,
  onEditClick,
}: IProps) => {
  const [open, setOpen] = useState(false);

  const deleteElement = async () => {
    await fetch(`/api/timelineEvents/${event._id as string}`, {
      method: "DELETE",
      headers: {
        password: adminPassword ?? "",
        "Content-Type": "application/json",
      },
    });
  };

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
        <Image src="/abakule.png" alt="Abakule" height="100px" width="100px" />
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
          {adminPassword && <button onClick={deleteElement}>Delete</button>}
          {onEditClick && (
            <button onClick={() => onEditClick(event)}>Edit</button>
          )}
          {adminPassword && `Index: ${event.index}`}
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
