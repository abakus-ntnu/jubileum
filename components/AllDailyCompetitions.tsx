import { Typography, Box, Accordion, AccordionSummary } from "@mui/material";
import { DailyCompetition } from "models/codeCompetitionSchema";
import React from "react";
import useSWR from "swr";
import DailyCompetitionElement from "./DailyCompetition";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// This is no longer part of the jubliee-page, but is left here as potential reference for later projects:)

interface ICompetitionsProps {
  adminPassword?: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const AllDailyCompetitions = ({ adminPassword }: ICompetitionsProps) => {
  const [expanded, setExpanded] = React.useState<string | null>(null);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : null);
    };
  const { data: competitions, error } = useSWR<DailyCompetition[], Error>(
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
  competitions.sort((a, b) =>
    a.date == b.date ? (a.index < b.index ? 1 : -1) : a.date < b.date ? 1 : -1
  );

  return (
    <Box>
      <Box>
        {competitions.map((competition) => (
          <Accordion
            sx={{ alignItems: "center" }}
            expanded={expanded === (competition._id as string)}
            onChange={handleChange(competition._id as string)}
            key={competition._id as string}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-conssstent"
              id={competition._id as string}
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
