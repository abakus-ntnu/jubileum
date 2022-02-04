import type { NextPage } from "next";
import React from "react";
import styles from "../../styles/Member.module.css";
import { Box, Divider, Stack, ToggleButton } from "@mui/material";
import HonoraryMember from "components/HonoraryMember";
import { members, info } from "../../data/membersUtils";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useRouter } from "next/dist/client/router";
import TheOrder from "components/TheOrder";
import JubPage from "components/JubPage";

const HonoraryMembersPage: NextPage = () => {
  const router = useRouter();
  const isOrder = router.query.view === "the-order";
  members.sort((m1, m2) => m2.appointed.localeCompare(m1.appointed));
  const honoraryMembers = members.map((member, index) => (
    <HonoraryMember
      key={member.name}
      member={member}
      reverse={index % 2 != 0}
    />
  ));
  const displayHonoraryMembers = (
    <Stack className={styles.pageStackStyle} direction="column" spacing={0}>
      <Box
        sx={{
          backgroundColor: "#eb4034",
          height: "56px",
          alignItems: "center",
          verticalAlign: "middsle",
          display: "flex",
        }}
        className={styles.boxStyle}
      >
        <Typography
          fontSize="1.5rem"
          fontWeight={400}
          color="secondary"
          marginLeft={2}
          sx={{
            fontSize: {
              xs: "1.3rem",
              md: "1.5rem",
            },
          }}
        >
          Informasjon om Æresmedlemmer
        </Typography>
      </Box>
      <Box
        sx={{
          height: { xs: 190, md: 100 },
          backgroundColor: "white",
          marginBottom: 4,
        }}
      >
        <Typography
          marginTop={1}
          sx={{
            fontSize: {
              xs: "1",
              md: "16px",
            },
            marginRight: {
              xs: "1rem",
              md: "2rem",
            },
            marginLeft: {
              xs: "1rem",
              md: "2rem",
            },
          }}
        >
          Har noen innlagt seg særlige fortjenester for foreningen, eller
          utmerket seg på annet vis, kan Hovedstyret innby vedkommende som
          æresmedlem av Abakus. Et æresmedlem skal ha vært, eller fortsatt være
          en stor ressurs for foreningen og skal ha lagt mer jobb enn det som er
          forventet i foreningens arbeid.
        </Typography>
        <Divider
          sx={{
            marginTop: 3,
            borderBottomWidth: 2,
            borderBottomColor: "rgb(0 0 0 / 30%)",
          }}
        />
      </Box>
      {honoraryMembers}
    </Stack>
  );
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
      {isOrder ? displayTheOrder : displayHonoraryMembers}
    </JubPage>
  );
};

export default HonoraryMembersPage;
