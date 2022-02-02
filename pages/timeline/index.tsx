import type { NextPage } from "next";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import Timeline from "components/Timeline";
import NavBar from "components/NavBar";
import Header from "components/Header";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import MockTimelineCard from "components/MockTimelineCard";

const TimelinePage: NextPage = () => {
  return (
    <>
      <Header title="Tidslinje" />
      <NavBar />

      <Box component="main" sx={{ p: 3 }}>
        <Typography variant="h1" align="center">
          Abakus&apos; historie
        </Typography>
        <MockTimelineCard header={"Tidslinje"}>
          <p>
            Her ønsker vi å fremheve historien til Abakus. I anledning
            40-årsjubileet i 2017 skrev readme spalten «Krøniken», som tok for
            seg linjeforeningens historie fra 1977 frem til 2016. Denne spalten
            blir også oppdatert av readme i anledning dette jubileet, med de
            viktigste hendelsene fra de siste fem årene. Her har vi organisert
            disse hendelsene i en tidslinje slik at det skal være lett å finne
            frem til hendleser i ulike perioder av Abakus&apos; historie.
          </p>
          <p>Først publisert i readme utgave 04, 05 og 06, 2016</p>
          <p>
            Opprinnelig tekst av Hans Gyldenhet Det Er Bare Å Gjøre Det –
            Stein-Otto Svorstøl og Hans Nynorskhet Kongen av Gløsløken – Mats
            Byrkjeland
          </p>
        </MockTimelineCard>
        <Timeline />
      </Box>
    </>
  );
};

export default TimelinePage;
