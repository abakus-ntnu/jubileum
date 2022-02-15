import { Typography, Box, Accordion, AccordionSummary } from "@mui/material";
import { DailyCompetition } from "models/codeCompetitionSchema";
import React from "react";
import useSWR from "swr";
import DailyCompetitionElement from "./DailyCompetition";

interface ICompetitionsProps {
  adminPassword?: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const AllDailyCompetitions = ({ adminPassword }: ICompetitionsProps) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange =
    (panel: string | ((prevState: string) => boolean)) =>
    (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? (panel as unknown as boolean) : false);
    };
  const { data: competitions, error } = useSWR<DailyCompetition[], unknown>(
    "/api/dailyCompetitions",
    fetcher,
    {
      refreshInterval: 5000,
    }
  );
  if (error) {
    return (
      <div style={{ color: "red", textAlign: "center" }}>Failed to load</div>
    );
  }
  if (!competitions) {
    return <Typography>loading...</Typography>;
  }
  competitions.sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <Box>
      <Box>
        {competitions.map((competition) => (
          <Accordion
            expanded={expanded === competition._id}
            onChange={handleChange(competition._id)}
            key={competition._id}
          >
            <AccordionSummary
              aria-controls="panel1bh-conssstent"
              id={competition._id}
            >
              <Typography sx={{ width: "50%", flexShrink: 0 }}>
                {competition.date}
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                {competition.title}
              </Typography>
            </AccordionSummary>

            <DailyCompetitionElement
              competition={competition}
              adminPassword={adminPassword}
            />
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default AllDailyCompetitions;
