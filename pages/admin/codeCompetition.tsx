import type { NextPage } from "next";
import "react-vertical-timeline-component/style.min.css";
import React, { FormEvent } from "react";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  TextField,
} from "@mui/material";
import { DailyCompetition } from "models/codeCompetitionSchema";
import DailyCompetitionElement from "components/DailyCompetition";
import AllDailyCompetitions from "components/AllDailyCompetitions";

const CodeCompetitionAdminPage: NextPage = () => {
  const [password, setPassword] = React.useState<string>("");
  const [passwordError, setPasswordError] = React.useState<boolean>(false);
  const [competition, setCompetition] = React.useState<DailyCompetition>({
    title: "",
    description: "",
    date: "",
    index: 0,
  });

  const putCompetition = async (
    competiton: DailyCompetition
  ): Promise<boolean> => {
    const res = await fetch("/api/dailyCompetitions", {
      method: "POST",
      headers: {
        password: password,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(competiton),
    });
    if (res.ok) {
      return true;
    } else if (res.status == 401) {
      setPasswordError(true);
    }
    console.log(res);
    return false;
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (competition.date && competition.description && competition.title) {
      if (await putCompetition(competition)) {
        setCompetition({ title: "", description: "", date: "", index: 0 });
      }
    }
  };

  return (
    <>
      <Header title="Daglige Kode-konkurranser admin" />
      <NavBar />

      <Container component="main" maxWidth="xl">
        <h1>Legg til kodekonkurranse</h1>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} lg={6}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "60ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <FormControl sx={{ m: 1 }}>
                <TextField
                  error={!competition.title}
                  label="Overskrift"
                  id="title"
                  value={competition.title}
                  onChange={(e) =>
                    setCompetition({ ...competition, title: e.target.value })
                  }
                />
                <TextField
                  error={!competition.description}
                  label="Beskrivelse"
                  id="description"
                  multiline
                  minRows={4}
                  value={competition.description}
                  onChange={(e) =>
                    setCompetition({
                      ...competition,
                      description: e.target.value,
                    })
                  }
                />
                <TextField
                  error={!competition.date}
                  label="Dato (YYYY.MM.DD)"
                  id="date"
                  value={competition.date}
                  onChange={(e) =>
                    setCompetition({ ...competition, date: e.target.value })
                  }
                />
                <TextField
                  error={!competition.index}
                  label="Index"
                  id="index"
                  value={competition.index}
                  onChange={(e) =>
                    setCompetition({
                      ...competition,
                      index: Number(e.target.value),
                    })
                  }
                />
                <TextField
                  error={passwordError}
                  label="Passord"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button onClick={submit}>Send</Button>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <h2>Preview</h2>
            <DailyCompetitionElement competition={competition} />
          </Grid>
        </Grid>
        <AllDailyCompetitions />
      </Container>
    </>
  );
};

export default CodeCompetitionAdminPage;
