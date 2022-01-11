import type { NextPage } from "next";
import "react-vertical-timeline-component/style.min.css";
import React, { FormEvent } from "react";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import TimelineEventElement from "components/TimelineEvent";
import { TimelineEvent } from "models/schema";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  TextField,
} from "@mui/material";
import { VerticalTimeline } from "react-vertical-timeline-component";
import Timeline from "components/Timeline";

const TimelinePage: NextPage = () => {
  const [password, setPassword] = React.useState<string>("");
  const [passwordError, setPasswordError] = React.useState<boolean>(false);
  const [event, setEvent] = React.useState<TimelineEvent>({
    title: "",
    description: "",
    date: "",
  });

  const putEvent = async (event: TimelineEvent): Promise<boolean> => {
    const res = await fetch("/api/timelineEvents", {
      method: "PUT",
      headers: {
        password: password,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
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
    if (event.date && event.description && event.title) {
      if (await putEvent(event)) {
        setEvent({ title: "", description: "", date: "" });
      }
    }
  };

  return (
    <>
      <Header title="Tidslinje admin" />
      <NavBar />

      <Container component="main" maxWidth="xl">
        <h1>Legg til event på tidslinjen</h1>
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
                  error={!event.title}
                  label="Overskrift"
                  id="title"
                  value={event.title}
                  onChange={(e) =>
                    setEvent({ ...event, title: e.target.value })
                  }
                />
                <TextField
                  error={!event.description}
                  label="Beskrivelse"
                  id="description"
                  multiline
                  minRows={4}
                  value={event.description}
                  onChange={(e) =>
                    setEvent({ ...event, description: e.target.value })
                  }
                />
                <TextField
                  error={!event.date}
                  label="År"
                  id="date"
                  value={event.date}
                  onChange={(e) => setEvent({ ...event, date: e.target.value })}
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
            <VerticalTimeline layout="1-column">
              <TimelineEventElement event={event} defaultExpanded={true} />
            </VerticalTimeline>
          </Grid>
        </Grid>
        <h2>Tidslinjen:</h2>
        <Timeline adminPassword={password} onEditClick={(timelineEvent: TimelineEvent) => setEvent(timelineEvent)} />
      </Container>
    </>
  );
};

export default TimelinePage;
