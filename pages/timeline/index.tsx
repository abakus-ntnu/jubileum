import type { NextPage } from "next";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import Timeline from "components/Timeline";
import { Box } from "@mui/material";
import MockTimelineCard from "components/MockTimelineCard";
import JubPage from "components/JubPage";

const TimelinePage: NextPage = () => {
  return (
    <JubPage title="Tidslinje" header="Abakus' historie">
      <MockTimelineCard header={"Tidslinje"}>
        <p>
          Her ønsker vi å fremheve historien til Abakus. I anledning
          40-årsjubileet i 2017 skrev readme spalten «Krøniken», som tok for seg
          linjeforeningens historie fra 1977 frem til 2016. Denne spalten blir
          også oppdatert av readme i anledning dette jubileet, med de viktigste
          hendelsene fra de siste fem årene. Her har vi organisert disse
          hendelsene i en tidslinje slik at det skal være lett å finne frem til
          hendleser i ulike perioder av Abakus&apos; historie.
        </p>
        <p>Først publisert i readme utgave 04, 05 og 06, 2016</p>
        <p>
          Opprinnelig tekst av Hans Gyldenhet Det Er Bare Å Gjøre Det –
          Stein-Otto Svorstøl og Hans Nynorskhet Kongen av Gløsløken – Mats
          Byrkjeland
        </p>
      </MockTimelineCard>
      <Timeline />
    </JubPage>
  );
};

export default TimelinePage;
