import type { NextPage } from "next";
import RibbonComponent from "../../components/RibbonComponent";
import { Grid, Typography } from "@mui/material";
import { medalDescriptions } from "../../data/ribbonUtils";
import JubPage from "components/JubPage";
import Centered from "components/Centered";

const RibbonsPage: NextPage = () => {
  const viewRibbons = (filterTag: string) =>
    medalDescriptions.map((ribbonType) => {
      if (filterTag === ribbonType.filterTag) {
        return (
          <Grid item xs="auto" key={ribbonType.medalType}>
            <RibbonComponent ribbonType={ribbonType} />
          </Grid>
        );
      }
    });

  return (
    <JubPage title="Daljer og Pins" header="Daljer og Pins">
      <Centered direction="column" paddingLeft="10%" paddingRight="10%">
        <Typography variant="h2" marginTop="0">
          Abakus-utmerkelser
        </Typography>
        <div>
          <Centered spacing={5} direction="row">
            {viewRibbons(`${"abakus"}`)}
          </Centered>
        </div>
        <Typography variant="h2">Styredaljer</Typography>
        <div>
          <Centered spacing={5} direction="row">
            {viewRibbons(`${"styre"}`)}
          </Centered>
        </div>
        <Typography variant="h2">Daljer for Verv i Abakus</Typography>
        <div>
          <Centered spacing={5} direction="row">
            {viewRibbons(`${"abakom"}`)}
          </Centered>
        </div>
        <Typography variant="h2">Den Gylne Kulerammes Orden</Typography>
        <div>
          <Centered spacing={5} direction="row">
            {viewRibbons(`${"ordenen"}`)}
          </Centered>
        </div>
        <Typography variant="h2">Jubileumsdaljer</Typography>
        <div>
          <Centered spacing={5} direction="row">
            {viewRibbons(`${"jubileum"}`)}
          </Centered>
        </div>
      </Centered>
    </JubPage>
  );
};

export default RibbonsPage;
