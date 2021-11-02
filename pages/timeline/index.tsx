import type { NextPage } from "next";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import Timeline from "../../components/Timeline";
import timelineEvents from "../../data/timeline.json";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";

const TimelinePage: NextPage = () => {
  return (
    <>
      <Header title="Tidslinje" />

      <NavBar />

      <main>
        <h1>Tidslinje!</h1>
        <Timeline events={timelineEvents} />
      </main>
    </>
  );
};

export default TimelinePage;
