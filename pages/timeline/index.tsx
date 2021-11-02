import type { NextPage } from "next";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import Timeline from "../../components/Timeline";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import useSWR from "swr";
import { TimelineEvent } from "models/schema";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const TimelinePage: NextPage = () => {
  const { data, error } = useSWR<TimelineEvent[], Error>(
    "/api/timelineEvents",
    fetcher,
    {
      refreshInterval: 5000,
    }
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Header title="Tidslinje" />

      <NavBar />

      <main>
        <h1>Tidslinje!</h1>
        <Timeline events={data} />
      </main>
    </>
  );
};

export default TimelinePage;
