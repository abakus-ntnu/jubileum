import { Card, Typography } from "@mui/material";
import { DailyCompetition } from "models/codeCompetitionSchema";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "styles/TimelinePage.module.css";

interface IProps {
  competition: DailyCompetition;
  adminPassword?: string;
}

const DailyCompetitionElement = ({ competition, adminPassword }: IProps) => {
  const deleteElement = async () => {
    await fetch(`/api/dailyCompeitions/${competition._id as string}`, {
      method: "DELETE",
      headers: {
        password: adminPassword ?? "",
        "Content-Type": "application/json",
      },
    });
  };
  //TODO: Style Box:
  return (
    <Card className={styles.introCard}>
      <Typography variant="h2">{competition.title}</Typography>
      <Typography>{competition.date} </Typography>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {competition.description}
      </ReactMarkdown>
    </Card>
  );
};

export default DailyCompetitionElement;
/**/
