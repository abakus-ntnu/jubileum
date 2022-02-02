import type { NextPage } from "next";
import React from "react";
import Header from "../../components/Header";
import styles from "../../styles/Member.module.css";
import { Stack, ToggleButton } from "@mui/material";
import HonoraryMember from "../../components/HonoraryMember";
import { members, info } from "../../data/membersUtils";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import cx from "classnames";
import NavBar from "components/NavBar";
import { useRouter } from "next/dist/client/router";
import TheOrder from "components/TheOrder";

const HonoraryMembersPage: NextPage = () => {
  const router = useRouter();
  const isOrder = router.query.view === "the-order";

  const honoraryMembers = members.map((member) => (
    <HonoraryMember key={member.name} member={member} />
  ));
  const displayHonoraryMembers = (
    <Stack className={styles.pageStackStyle} direction="column" spacing={5}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            bgcolor: "warning.main",
          }}
        >
          <Typography color="common.black" variant="h5">
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
    <Stack className={styles.pageStackStyle} direction="column">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            bgcolor: "warning.main",
          }}
        >
          <Typography color="common.black" variant="h5">
            Hva er Ordenen?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{info.orden}</Typography>
        </AccordionDetails>
      </Accordion>
      <TheOrder />
    </Stack>
  );

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
            selected={!isOrder}
            onChange={async () => {
              await router.replace("/members?view=honorary-members");
            }}
            size="large"
            color="error"
          >
            Æresmedlemmer
          </ToggleButton>
          <ToggleButton
            value="check"
            selected={isOrder}
            onChange={async () => {
              await router.replace("/members?view=the-order");
            }}
            size="large"
            color="error"
          >
            Orden
          </ToggleButton>
        </Stack>
        <p />
        {isOrder ? displayTheOrder : displayHonoraryMembers}
      </main>
    </>
  );
};

export default HonoraryMembersPage;
