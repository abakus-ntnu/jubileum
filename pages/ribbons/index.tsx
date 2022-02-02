import type { NextPage } from "next";
import RibbonComponent from "../../components/RibbonComponent";
import { Grid, Typography } from "@mui/material";
import { medalDescriptions } from "../../data/ribbonUtils";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";

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
    <>
      <Header title="Daljer og Pins" />

      <NavBar />

      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        paddingLeft="10%"
        paddingRight="10%"
      >
        <Typography variant="h1">Daljer og Pins</Typography>
        <Typography variant="h2" marginTop="0">
          Abakus-utmerkelser
        </Typography>
        <div>
          <Grid
            container
            spacing={5}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {viewRibbons(`${"abakus"}`)}
          </Grid>
        </div>
        <Typography variant="h2">Styredaljer</Typography>
        <div>
          <Grid
            container
            spacing={5}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {viewRibbons(`${"styre"}`)}
          </Grid>
        </div>
        <Typography variant="h2">Daljer for Verv i Abakus</Typography>
        <div>
          <Grid
            container
            spacing={5}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {viewRibbons(`${"abakom"}`)}
          </Grid>
        </div>
        <Typography variant="h2">Den Gylne Kulerammes Orden</Typography>
        <div>
          <Grid
            container
            spacing={5}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {viewRibbons(`${"ordenen"}`)}
          </Grid>
        </div>
        <Typography variant="h2">Jubileumsdaljer</Typography>
        <div>
          <Grid
            container
            spacing={5}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {viewRibbons(`${"jubileum"}`)}
          </Grid>
        </div>
      </Grid>
    </>
  );
};

export default RibbonsPage;
