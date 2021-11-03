import type { NextPage } from "next";
import React, { useState } from "react";
import Header from "../../components/Header";
import styles from "../../styles/Member.module.css";
import { Stack, Button } from "@mui/material";
import HonoraryMember from "../../components/honoraryMember";
import { members, info } from "../../data/membersUtils";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import cx from "classnames";

const HonoraryMembersPage: NextPage = () => {
  const [pageDisplay, setPageDisplay] = useState(true);

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

  return (
    <>
      <Header title="Æresmedlemmer" />

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
          <Button
            size="large"
            variant="contained"
            color="error"
            onClick={() => {
              setPageDisplay(true);
            }}
          >
            Æresmedlemmer
          </Button>
          <Button
            size="large"
            variant="contained"
            color="error"
            onClick={() => {
              setPageDisplay(false);
            }}
          >
            Orden
          </Button>
        </Stack>
        <p />
        {pageDisplay ? displayHonoraryMembers : displayTheOrder}
      </main>
    </>
  );
};

export default HonoraryMembersPage;
