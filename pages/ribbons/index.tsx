import type { NextPage } from "next";
import RibbonComponent from "../../components/RibbonComponent";
import { Grid, Typography, Box } from "@mui/material";
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
    <Box>
      <Header title="Daljer og Pins" />

      <NavBar />

      <Box
        padding="5rem 0"
        flex="1"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        marginLeft="10%"
        marginRight="10%"
      >
        <Typography variant="h1" margin="1rem">
          {" "}
          Daljer og Pins
        </Typography>
        <Typography variant="h3" margin="5rem">
          Jubileumsdaljer
        </Typography>
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
        <Typography variant="h3" margin="5rem">
          Daljer for Verv i Abakus
        </Typography>
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
        <Typography variant="h3" margin="5rem">
          Den Gylne Kulerammes Orden
        </Typography>
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
        <Typography variant="h3" margin="5rem">
          Pins
        </Typography>
        <div>
          <Grid
            container
            spacing={5}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {viewRibbons(`${"pins"}`)}
          </Grid>
        </div>
      </Box>
    </Box>
  );
};

export default RibbonsPage;
