import type { NextPage } from "next";
import Countdown from "components/Countdown";
import JubPage from "components/JubPage";
import { Card, CardContent, Typography } from "@mui/material";
import useFireworks from "hooks/useFireworks";
import Centered from "../components/Centered";
import { loadEvents } from "../data/programUtils";
import JubProgram, { JubDay } from "../components/JubProgram";
import Podcast from "components/Podcast";

interface IProps {
  jubDays: JubDay[];
}

const Home: NextPage<IProps> = ({ jubDays }) => {
  useFireworks();

  return (
    <JubPage
      title="Hjem"
      header="Abakus fyller 45 år! 🥳"
      sx={{ maxWidth: 1200, m: "auto" }}
    >
      <Centered>
        <Countdown countDownDate={new Date("Mar 7, 2022 12:15:00")} />
      </Centered>
      <Card sx={{ mt: 7, borderTop: "3px solid", borderColor: "primary.main" }}>
        <CardContent>
          <Typography align="center">
            Abakus ble i 1977 stiftet av en gruppe datateknikkstudenter som brøt
            ut fra linjeforeningen Omega. I dag har denne linjeforeningen vokst
            seg til noe som man i den tid ikke kunne forestilt seg. Foreningen
            fungerer som et bindeledd mellom IT-bedrifter og studentene ved
            disse linjene, og som et sosialt knutepunkt for sine medlemmer.
            <br />
            <br /> Denne siden skal gi ett overordnet blikk over viktige
            hendelser innenfor Abakus sin historie og æresmedlemmene som har
            bidratt til å gjøre Abakus til den linjeforeningen som den er i dag.
            I tillegg vil det være mange arrangementer og begivenheter
            tilknyttet jubileet, og konkurranser er det selvfølgelig også.
          </Typography>
        </CardContent>
      </Card>
      {
        //TODO: add podcast back when the jubilee episode is out
        //<Podcast/>
      }
      <Typography variant="h1" component="div">
        Program
      </Typography>
      <JubProgram jubDays={jubDays} />
    </JubPage>
  );
};

Home.getInitialProps = async () => {
  const events = await loadEvents();
  const jubDays = [
    { title: "Mandag", events: [events[0], events[1]] },
    {
      title: "Tirsdag",
      events: [{ ...events[2], defaultExpanded: true }, events[3]],
    },
    { title: "Onsdag", events: [events[4], events[5]] },
    {
      title: "Torsdag",
      events: [{ ...events[6], defaultExpanded: true }, events[7]],
    },
    { title: "Fredag", events: [events[8]] },
    { title: "Lørdag", events: [events[9]] },
  ];
  return { jubDays };
};

export default Home;
