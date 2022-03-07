import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const CompetitionInfo = () => {
  return (
    <Card
      sx={{
        mt: 7,
        borderTop: "3px solid",
        borderColor: "primary.main",
        maxWidth: "1200px",
      }}
    >
      <CardContent>
        <Typography align="center" mb={4}>
          Det er ikke bare dansefoten som skal vekkes under jubileumsuken, men
          også konkurranseinstinktet!
          <br />
          Her er en oversikt over de ulike konkurransene gjennom uken:
        </Typography>

        <Typography align="center" variant="h4" mb={2}>
          {" "}
          OVERALL-konkurransen:{" "}
        </Typography>
        <Typography align="center" mb={2}>
          Som en del av jubileumet til Abakus kommer det til å foregå en stor
          konkurranse gjennom hele uka, hvor den mest ivrige abakulen skal
          kåres! Overall-konkurransen handler om god deltagelse på
          arrangementene i tillegg til solid kunnskap om linjeforeningen vår og
          generelt tiårene som Abakus har lagt bak seg. Vi kan friste med svært
          lukurative premier til topp 5, og vinnerne blir annonsert på selveste
          jubileumsgallaen. Her er en oversikt over hvordan du sanker inn
          poengene dine:
        </Typography>

        <Typography align="center" variant="h6" mb={2}>
          {" "}
          Arrangementer:{" "}
        </Typography>
        <Typography align="center" mb={2}>
          Det vil bli utdelt 3 deltakerpoeng for å delta på følgende
          arrangementer:
          <br />
          Åpningsfest
          <br />
          Interessegruppe-kveld
          <br />
          Idrettsdag
          <br />
          Proggekonkurranse
          <br />
          Senkveld
          <br />
          Galla
        </Typography>

        <Typography align="center" variant="h6" mb={2}>
          {" "}
          Quiz på kontoret:{" "}
        </Typography>
        <Typography align="center" mb={2}>
          Fra mandag til fredag vil det hver dag ligge en ny quiz på kontoret
          som tar for seg hvert sitt tiår fra 1970-tallet og fram til i dag.
          Quizene består av 10 spørsmål som handler om Abakus sin historie og
          generelle spørsmål knyttet til dagens tiår. Det vil bli brukt følgende
          poengfordeling på svarene: 10 riktige: 3 poeng 5-9 riktige: 2 poeng0-4
          riktige: 1 poeng Måtte den beste jubilanten vinne!
        </Typography>

        <Typography align="center" variant="h4" mb={2}>
          {" "}
          Meme-konkurranse:{" "}
        </Typography>
        <Typography align="center" mb={2}>
          “I am once again asking, når skal Abakus sin beste memer kåres?” Vel
          svaret er under jubileumsuken! Arbeidsoppgaven er enkel; bruk
          kreativiteten, lag en meme og post den i kanalen “abamemes” på
          Abakus-slacken. Vinneren er den som sitter igjen med flest
          “rødt-hjerte”-reaksjoner på sin meme, og i tillegg til heder og ære
          venter det også en premie som varmer et studenterhjerte. Templates kan
          finnes på{" "}
          <a
            href="https://imgflip.com/memegenerator"
            target="_blank"
            rel="noreferrer"
          >
            memegenerator
          </a>
          , men det er så klart lov å lage egne også!
        </Typography>

        <Typography align="center" variant="h4" mb={2}>
          {" "}
          Ukas bilde:{" "}
        </Typography>
        <Typography align="center" mb={2}>
          Er det en ting som er sikkert så er det at jubileumsuken må
          dokumenteres! Ta bilder og videoer mens du koser deg på ukens
          arrangementer, legg det ut som et innlegg eller en story på instagram
          og bruk hashtagen “abakus45”. Vinneren kåres på slutten av uken og det
          venter en saftig premie til ukens store fotograf! PS: Viktig at alle
          på bildet gir samtykke før det publiseres.
        </Typography>

        <Typography align="center" variant="h4" mb={2}>
          {" "}
          Trekkepremie:{" "}
        </Typography>
        <Typography align="center" mb={2}>
          Er du en som aldri kunne gått under kallenavnet Quiz Khalifa eller en
          som ikke klarer å holde tommelen unna kameralinsen? Er du en som ikke
          har forstått kunsten bak en god meme og holder av lørdagskvelden til
          Lottotrekning? Slapp av, vi har en konkurranse for deg og! Meld deg på
          arrangementene våre under jubileumsuka, så kanskje du er den heldige
          abakulen som stikker avgårde med trekkepremien på et Sit-gavekort til
          500 kr.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CompetitionInfo;
