import React, { FunctionComponent } from "react";
import { Card } from "@mui/material";
import styles from "../styles/MockTimelineCard.module.css";

const MockTimelineCard: FunctionComponent<{ header: string }> = ({
  header,
  children,
}) => {
  return (
    <Card className={styles.introCard}>
      <h1>{header}</h1>
      {children}
    </Card>
  );
};

export default MockTimelineCard;
