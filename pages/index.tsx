import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Countdown from "../components/Countdown";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header title="Hjem" />

      <NavBar />

      <main className={styles.main}>
        <Countdown countDownDate={new Date("Mar 13, 2022 02:00:00")} />
        <h1 className={styles.title}>Abakus 45års jubileumsside!:)</h1>

        <p className={styles.description}>
          Wohoo her skal dere lage en skikkelig kul side! Lykkke til, det blir
          bra!
        </p>
      </main>
    </div>
  );
};

export default Home;
