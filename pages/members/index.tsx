import type { NextPage } from "next";
import React from "react";
import styles from "../../styles/Member.module.css";
import { Stack, ToggleButton } from "@mui/material";
import { info } from "data/membersUtils";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useRouter } from "next/dist/client/router";
import TheOrder from "components/TheOrder";
import JubPage from "components/JubPage";
import HonoraryMembers from "components/HonoraryMembers";

const AppointedMembersPage: NextPage = () => {
  const router = useRouter();
  const isOrder = router.query.view === "the-order";

  const displayTheOrder = (
    <Stack className={styles.pageStackStyle} direction="column">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            bgcolor: "#eb4034",
          }}
        >
          <Typography color="secondary" variant="h5">
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
    <JubPage
      title="Æresmedlemmer"
      header="Æresmedlemmer og Den Gyldne Kulerammes Orden"
    >
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
      {isOrder ? displayTheOrder : <HonoraryMembers />}
    </JubPage>
  );
};

export default AppointedMembersPage;
