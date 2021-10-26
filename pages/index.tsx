/*
This is the index page, aka the page that opens when you run the project
This is where you are to put everything you want on the start page and 
links to all the other pages you want to include in the project
*/

import type { NextPage } from "next";
import TestComponent from "../components/TestComponent";
import styles from "../styles/Home.module.css";
import Countdown from "../components/Countdown";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header title="Hjem" />

      <main className={styles.main}>
        <Countdown countDownDate={new Date("Mar 13, 2022 02:00:00")} />
        <h1 className={styles.title}>Abakus 45års jubileumsside!:)</h1>

        <p className={styles.description}>
          Wohoo her skal dere lage en skikkelig kul side! Lykkke til, det blir
          bra!
        </p>

        <TestComponent />
      </main>
    </div>
  );
};

export default Home;
