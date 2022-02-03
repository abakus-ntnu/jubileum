import { Container } from "@mui/material";
import DailyCompetitionElement from "components/DailyCompetition";
import Header from "components/Header";
import NavBar from "components/NavBar";
import { NextPage } from "next";
import React from "react";

const testCompetition = {
  title: "Test Title",
  description:
    "*Test Description* \n **asgsfgsydtffgshdghsdg** \n ***sdfg syga4yufgrg*** ****gf4fahagvsdhfyargaghf vzsdhfz****",
  date: "07.03.2022",
  index: 0,
};

const CodeCompetitionPage: NextPage = () => {
  return (
    <>
      <Header title="Dagens Programmerings-konkurranse" />

      <NavBar />
      <Container>
        <DailyCompetitionElement competition={testCompetition} />
      </Container>
    </>
  );
};

export default CodeCompetitionPage;
