import type { NextPage } from "next";
import React, { FormEvent, useState, ChangeEvent } from "react";
import JubPage from "components/JubPage";
import {
  FormControl,
  TextField,
  Button,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputLabel,
  IconButton,
  Stack,
  Box,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Competition, Score } from "models/leaderboardSchema";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const LeaderboardAdmin: NextPage = () => {
  //password data
  const [password, setPassword] = React.useState<string>("");
  const [passwordError, setPasswordError] = React.useState<boolean>(false);

  //get competitions available
  const { data: competitions } = useSWR<Competition[], unknown>(
    "/api/leaderboardAPI/competition",
    fetcher,
    {
      refreshInterval: 5000,
    }
  );

  //data that is to be sent
  const [newCompetition, setNewCompetition] = useState<Competition>({
    name: "",
  });
  const [newScore, setNewScore] = useState<Score>({
    CID: "",
    UID: [],
    score: 0,
  });

  //put competition into db
  const putCompetition = async (competition: Competition): Promise<boolean> => {
    const res = await fetch("/api/leaderboardAPI/competition", {
      method: "PUT",
      headers: {
        password: password,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(competition),
    });
    if (res.ok) {
      console.log("Lagt til i database!");
      return true;
    } else if (res.status == 401) {
      setPasswordError(true);
      console.log("Password error");
    }
    console.log("Uh oh, noe gikk galt.");
    console.log(res);
    return false;
  };

  //button competition
  const submitCompetition = async (e: FormEvent) => {
    e.preventDefault();
    if (newCompetition.name) {
      if (await putCompetition(newCompetition)) {
        setNewCompetition({ name: "" });
      }
    }
  };

  //put score into db
  const putScores = async (
    competition: Competition,
    participants: { name: string }[],
    score: Score
  ): Promise<boolean> => {
    const dataObject = {
      competition: competition,
      participant: participants,
      score: score,
    };
    const res = await fetch("/api/leaderboardAPI/score", {
      method: "PUT",
      headers: {
        password: password,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObject),
    });
    if (res.ok) {
      console.log("Lagt til deltaker i database!");
      console.log(res);
      return true;
    } else if (res.status == 401) {
      setPasswordError(true);
      console.log("Password error");
    }
    console.log("Uh oh, noe gikk galt.");
    console.log(res);
    return false;
  };

  //button submit score
  const submitScore = async (e: FormEvent) => {
    e.preventDefault();
    if (await putScores(chosenComp, inputParticipants, newScore)) {
      setNewScore({ UID: [], CID: "", score: 0 });
      setInputParticipants([{ name: "" }]);
    }
  };

  //dropDown competition add participant(s)
  const [dropdown, setDropdown] = useState("");
  const [chosenComp, setChosenComp] = useState<Competition>({ name: "" });
  const handleChangeDropdown = (e: SelectChangeEvent) => {
    setDropdown(e.target.value);
    setChosenComp({ ...chosenComp, name: e.target.value });
  };

  //dynamic input fields
  const [inputParticipants, setInputParticipants] = useState([{ name: "" }]);
  const handleChangeInput = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    index: number
  ) => {
    const values: { name: string }[] = [...inputParticipants];
    values[index].name = e.target.value;
    setInputParticipants(values);
  };

  const handleAddFields = () => {
    setInputParticipants([...inputParticipants, { name: "" }]);
  };
  const handleRemoveFields = (index: number) => {
    const values = [...inputParticipants];
    values.splice(index, 1);
    setInputParticipants(values);
  };

  return (
    <>
      <JubPage title="Leaderboard admin" />
      <Box sx={{ m: 2 }}>
        <h1>Endre leaderboard data</h1>

        <h2>Passord</h2>
        <FormControl sx={{ m: 1 }}>
          <TextField
            error={passwordError}
            label="Passord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>

        <h2>Legg til konkurranse</h2>
        <FormControl sx={{ m: 1 }}>
          <TextField
            error={!newCompetition.name}
            label="Navn på konkurranse"
            id="new-competition-name"
            value={newCompetition.name}
            onChange={(e) =>
              setNewCompetition({ ...newCompetition, name: e.target.value })
            }
          />
        </FormControl>
        <br></br>
        <FormControl sx={{ m: 1 }}>
          <Button onClick={submitCompetition}>Legg til konkurranse</Button>
        </FormControl>

        <h2>Legg til deltaker eller gruppe</h2>
        <p>
          NB! Ikke legg til flere deltakere samtidig med mindre de er på samme
          gruppe i samme konkurranse! Husk fullt navn på hver person :)
        </p>
        <FormControl sx={{ m: 1, minWidth: 150 }}>
          <InputLabel id="comp-label">Konkurranse</InputLabel>
          <Select
            labelId="comp-label"
            id="select-comp"
            value={dropdown}
            onChange={handleChangeDropdown}
            label="Konkurranse"
          >
            <MenuItem value="">
              <em>Velg konkurranse</em>
            </MenuItem>
            {competitions?.map(({ name, _id }) => (
              <MenuItem value={_id as string} key={_id as string}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <br></br>

        <FormControl sx={{ m: 1, minWidth: 150 }}>
          <Stack spacing={2}>
            {inputParticipants.map((participant, index) => (
              <div key={index}>
                <TextField
                  name="navn"
                  label="FULLT NAVN PÅ DELTAKER"
                  value={participant.name}
                  onChange={(e) => handleChangeInput(e, index)}
                />
                <IconButton>
                  <AddCircleIcon onClick={handleAddFields}></AddCircleIcon>
                </IconButton>
                <IconButton>
                  <RemoveCircleIcon
                    onClick={() => handleRemoveFields(index)}
                  ></RemoveCircleIcon>
                </IconButton>
              </div>
            ))}
          </Stack>
        </FormControl>
        <br></br>

        <FormControl sx={{ m: 1, minWidth: 150 }}>
          <TextField
            id="participant-score"
            label="Score"
            type="number"
            value={newScore.score}
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            onChange={(e) =>
              setNewScore({ ...newScore, score: +e.target.value })
            }
          />
        </FormControl>
        <br></br>
        <Button onClick={submitScore}>Legg til deltaker(e)</Button>
      </Box>
    </>
  );
};

export default LeaderboardAdmin;
