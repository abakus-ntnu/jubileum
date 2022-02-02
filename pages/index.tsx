import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Countdown from "../components/Countdown";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const Home: NextPage = () => {
  return (
    <>
      <Header title="Hjem" />
      <NavBar />
      <div className={styles.boks}>
        <h1 className={styles.title}>Abakus fyller 45 år! 🥳</h1>
        <Countdown countDownDate={new Date("Mar 7, 2022 12:15:00")} />
        <p className={styles.description}>
          Abakus ble i 1977 stiftet av en gruppe datateknikkstudenter som brøt
          ut fra linjeforeningen Omega. I dag har denne linjeforeningen vokst
          seg til noe som man i den tid ikke kunne forestilt seg. Foreningen
          fungerer som et bindeledd mellom IT-bedrifter og studentene ved disse
          linjene, og som et sosialt knutepunkt for sine medlemmer. <br />
          <br /> Denne siden skal gi ett overordnet blikk over viktige hendelser
          innenfor Abakus sin historie og æresmedlemmene som har bidratt til å
          gjøre Abakus til den linjeforeningen som den er i dag. I tillegg vil
          det være mange arrangementer og begivenheter tilknyttet jubileet, og
          konkurranser er det selvfølgelig også.
        </p>
      </div>
    </>
  );
};

export default Home;
