import type { NextPage } from "next";
import React, { useState } from "react";
import Header from "../../components/Header";
import styles from "../../styles/Member.module.css";
import { Stack, ToggleButton } from "@mui/material";
import HonoraryMember from "../../components/honoraryMember";
import { members, info } from "../../data/membersUtils";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import cx from "classnames";
import NavBar from "components/NavBar";
import { useRouter } from "next/dist/client/router";

const HonoraryMembersPage: NextPage = () => {
  const [pageDisplay, setPageDisplay] = useState(true);
  const router = useRouter();

  const honoraryMembers = members.map((m) => (
    <HonoraryMember key={m.name} {...m} />
  ));
  const displayHonoraryMembers = (
    <Stack className={styles.pageStackStyle} direction="column" spacing={5}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            bgcolor: "text.secondary",
          }}
        >
          <Typography color="common.white" variant="h5">
            Informasjon om Æresmedlemmer
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{info.aresMedlemmer}</Typography>
        </AccordionDetails>
      </Accordion>
      {honoraryMembers}
    </Stack>
  );
  const displayTheOrder = (
    <Stack direction="column">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            bgcolor: "text.secondary",
          }}
        >
          <Typography color="common.white" variant="h5">
            Hva er Ordenen?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{info.orden}</Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
  const [honorSelected, setHonorSelected] = React.useState(true);
  const [orderSlected, setOrderSlected] = React.useState(false);

  return (
    <>
      <Header title="Æresmedlemmer" />

      <NavBar />

      <main>
        <h1 className={cx(styles.mainTitle, styles.titleSize)}>
          Æresmedlemmer og Den Gyldne Kulerammes Orden
        </h1>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          className={styles.buttonStyle}
        >
          <ToggleButton
            value="check"
            selected={honorSelected}
            onChange={async () => {
              if (!honorSelected && orderSlected) {
                setOrderSlected(!orderSlected);
                setHonorSelected(!honorSelected);
              }
              setPageDisplay(true);
              router.query.view = "honorary-members";
              await router.push(router);
            }}
            size="large"
            color="error"
          >
            Æresmedlemmer
          </ToggleButton>
          <ToggleButton
            value="check"
            selected={orderSlected}
            onChange={async () => {
              if (honorSelected && !orderSlected) {
                setOrderSlected(!orderSlected);
                setHonorSelected(!honorSelected);
              }
              setPageDisplay(false);
              router.query.view = "the-order";
              await router.push(router);
            }}
            size="large"
            color="error"
          >
            Orden
          </ToggleButton>
        </Stack>
        <p />
        {pageDisplay ? displayHonoraryMembers : displayTheOrder}
      </main>
    </>
  );
};

export default HonoraryMembersPage;
