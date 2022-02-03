import { Box, Typography } from "@mui/material";
import { DailyCompetition } from "models/codeCompetitionSchema";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface IProps {
  competition: DailyCompetition;
  adminPassword?: string;
}

const DailyCompetitionElement = ({ competition, adminPassword }: IProps) => {
  const [open, setOpen] = useState(false);

  const deleteElement = async () => {
    await fetch(`/api/dailyCompeitions/${competition._id as string}`, {
      method: "DELETE",
      headers: {
        password: adminPassword ?? "",
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <Box>
      <Typography variant="h1">
        {competition.title}, index {competition.index}
      </Typography>
      <Typography>{competition.date} </Typography>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
      >
        {competition.description}
      </ReactMarkdown>
    </Box>
  );
};

export default DailyCompetitionElement;
/**/
