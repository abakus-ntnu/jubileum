import { Card, Typography, Button, Box } from "@mui/material";
import { DailyCompetition } from "models/codeCompetitionSchema";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface IProps {
  competition: DailyCompetition;
  adminPassword?: string;
}

const DailyCompetitionElement = ({ competition, adminPassword }: IProps) => {
  const deleteElement = async () => {
    await fetch(`/api/dailyCompetitions/${competition._id as string}`, {
      method: "DELETE",
      headers: {
        password: adminPassword ?? "",
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <Card
      sx={{
        padding: "20px",
        margin: 0,
        maxWidth: "1200px",
        borderTop: "3px solid #e10c16",
      }}
    >
      {adminPassword && (
        <Button variant="contained" onClick={deleteElement}>
          Delete
        </Button>
      )}
      <Typography variant="h2">{competition.title}</Typography>
      <Typography>{competition.date} </Typography>
      <Box></Box>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {competition.description}
      </ReactMarkdown>
    </Card>
  );
};

export default DailyCompetitionElement;
