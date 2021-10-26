import type { NextPage } from "next";
import Head from "next/head";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import Timeline from "../../components/Timeline";
import timelineEvents from "../../data/timeline.json";

const TimelinePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Abakus 45års jubileum</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Tidslinje!</h1>
        <Timeline events={timelineEvents} />
      </main>
    </>
  );
};

export default TimelinePage;
