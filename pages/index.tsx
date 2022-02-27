import type { NextPage } from "next";
import Countdown from "components/Countdown";
import JubPage from "components/JubPage";
import { Typography } from "@mui/material";
import useFireworks from "hooks/useFireworks";
import Centered from "../components/Centered";
import ProgramComponent from "components/Program";
import { JubEvent, loadEvents } from "../data/programUtils";

interface IProps {
  events: JubEvent[];
}

const Home: NextPage<IProps> = ({ events }) => {
  useFireworks();

  return (
    <JubPage title="Hjem" header="Abakus fyller 45 år! 🥳">
      <Centered>
        <Countdown countDownDate={new Date("Mar 7, 2022 12:15:00")} />
      </Centered>
      <Typography fontSize="x-large" align="center">
        Abakus ble i 1977 stiftet av en gruppe datateknikkstudenter som brøt ut
        fra linjeforeningen Omega. I dag har denne linjeforeningen vokst seg til
        noe som man i den tid ikke kunne forestilt seg. Foreningen fungerer som
        et bindeledd mellom IT-bedrifter og studentene ved disse linjene, og som
        et sosialt knutepunkt for sine medlemmer. <br />
        <br /> Denne siden skal gi ett overordnet blikk over viktige hendelser
        innenfor Abakus sin historie og æresmedlemmene som har bidratt til å
        gjøre Abakus til den linjeforeningen som den er i dag. I tillegg vil det
        være mange arrangementer og begivenheter tilknyttet jubileet, og
        konkurranser er det selvfølgelig også.
      </Typography>
      <Centered>
        <iframe
          className="spotify-embed"
          src="https://open.spotify.com/embed/show/2ZeUiQ4pclClRbDfBvwPyC?utm_source=generator"
          color=""
          width="600"
          height="232"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
        <div>
          <Typography variant="h1" component="div">
            Program
          </Typography>
          {events.map((program) => {
            return <ProgramComponent key={program.title} program={program} />;
          })}
        </div>
      </Centered>
    </JubPage>
  );
};

Home.getInitialProps = async () => {
  const events = await loadEvents();
  return { events };
};

export default Home;
