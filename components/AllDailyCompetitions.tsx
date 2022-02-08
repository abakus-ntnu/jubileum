import {
  Typography,
  Box,
  FormControl,
  InputLabel,
  NativeSelect,
  Button,
} from "@mui/material";
import { DailyCompetition } from "models/codeCompetitionSchema";
import React, { useState } from "react";
import useSWR from "swr";
import DailyCompetitionElement from "./DailyCompetition";

interface ICompetitionsProps {
  adminPassword?: string;
  selectedCompetition?: (competition: DailyCompetition) => void;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const AllDailyCompetitions = ({
  adminPassword,
  selectedCompetition,
}: ICompetitionsProps) => {
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

  const [value, setValue] = useState(competitions[0]._id);
  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{alignSelf: "left"}} >
      {competitions.map((competition) =>
        <Button
          onClick={() => {handleChange(competition._id)}}
        >{competition.date}</Button>)}
      </Box>

      <Box>
        {competitions
        .filter(competition => competition._id == value)
        .map((competition) => (
          <DailyCompetitionElement
            competition={competition}
            adminPassword={adminPassword}
          />
        ))}
      </Box>
    </Box>
  );
};

export default AllDailyCompetitions;
