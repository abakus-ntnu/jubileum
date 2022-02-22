import type { NextPage } from "next";
import React from "react";
import { Box, Stack, ToggleButton } from "@mui/material";
import { info } from "data/membersUtils";
import { useRouter } from "next/dist/client/router";
import TheOrder from "components/TheOrder";
import JubPage from "components/JubPage";
import HonoraryMembers from "components/HonoraryMembers";
import InfoBox from "components/InfoBox";

const AppointedMembersPage: NextPage = () => {
  const router = useRouter();
  const isOrder = router.query.view === "the-order";

  return (
    <JubPage
      title="Æresmedlemmer"
      header="Æresmedlemmer og Den Gyldne Kulerammes Orden"
    >
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ p: 2 }}>
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
      <InfoBox
        title={isOrder ? "Hva er Ordenen?" : "Informasjon om Æresmedlemmer"}
        text={isOrder ? info.orden : info.aresMedlemmer}
      />
      <Box maxWidth={1500} m="20px auto">
        {isOrder ? <TheOrder /> : <HonoraryMembers />}
      </Box>
    </JubPage>
  );
};

export default AppointedMembersPage;
