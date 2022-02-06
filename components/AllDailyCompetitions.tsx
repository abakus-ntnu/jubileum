import {
  Typography,
  Box,
  FormControl,
  InputLabel,
  NativeSelect,
} from "@mui/material";
import { DailyCompetition } from "models/codeCompetitionSchema";
import React from "react";
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

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Dato for konkurranse
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: "konkurranse",
            id: "uncontrolled-native",
          }}
        >
          {competitions.map((competition) =>
          <option value={competition.date}>{competition.date}</option>
          )}
        </NativeSelect>
      </FormControl>

      <Box>
        {competitions.map((competition) => (
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
