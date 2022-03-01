import type { NextPage } from "next";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import Timeline from "components/Timeline";
import MockTimelineCard from "components/MockTimelineCard";
import JubPage from "components/JubPage";

const TimelinePage: NextPage = () => {
  return (
    <JubPage title="Tidslinje" header="Abakus' historie">
      <MockTimelineCard header={"Tidslinje"}>
        <p>
          Her ønsker vi å fremheve historien til Abakus. Vi har derfor samlet
          informasjon om linjeforeningens historie fra flere ulike kilder.
          readme skrev spalten «Krøniken» i anledning 40-årsjubileet i 2014, og
          oppdaterer denne til jubileet i år. I tillegg har vi hentet masse
          informasjon fra Arven, som er et prosjekt med mål om å sikre
          Abakus&apos; arv ved å ta vare på det som finnes av arkiv og verdier,
          samt å arkivere nåvarende hendelser. Her har vi organisert disse
          hendelsene i en tidslinje slik at det skal være lett å finne frem til
          hendleser i ulike perioder av Abakus&apos; historie.
        </p>
        <p>
          «Krøniken» ble først publisert i readme utgave 04, 05 og 06, 2016 og
          01 og 02, 2017 med opprinnelig tekst av Hans Gyldenhet Det Er Bare Å
          Gjøre Det – Stein-Otto Svorstøl og Hans Nynorskhet Kongen av Gløsløken
          – Mats Byrkjeland
        </p>
        <p>
          Arven er et prosjekt som per februar 2021 består av Peder Smith, Åsne
          Stige, Hedda Mathilde Sæther Langvik, Fredrik Aakredalen og Jenny Yu.
          Med tidligere medlemmer Stein-Otto Svorstøl, Martin Hallén, Mats
          Byrkjeland, Ingrid Sørdal Volden, Thea Svenkerud Rydjord, Karoline
          Bonnerud og Sandra Kvaløy. Prosjektet kan finnes på{" "}
          <a
            href="https://wiki.abakus.no/display/historie/Arven"
            target="_blank"
            rel="noreferrer"
          >
            Abakus&apos; wiki
          </a>
          .
        </p>
      </MockTimelineCard>
      <Timeline />
    </JubPage>
  );
};

export default TimelinePage;
