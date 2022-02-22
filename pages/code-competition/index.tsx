import { Container, Box } from "@mui/material";
import AllDailyCompetitions from "components/AllDailyCompetitions";
import Header from "components/Header";
import NavBar from "components/NavBar";
import { NextPage } from "next";
import React from "react";

const CodeCompetitionPage: NextPage = () => {
  return (
    <Box>
      <Header title="Dagens Programmerings-konkurranse" />

      <NavBar />
      <Container>
        <AllDailyCompetitions />
      </Container>
    </Box>
  );
};

export default CodeCompetitionPage;
