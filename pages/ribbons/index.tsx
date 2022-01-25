import type { NextPage } from "next";
import RibbonComponent from "../../components/RibbonComponent";
import styles from "../../styles/RibbonsPage.module.css";
import { Grid } from "@mui/material";
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
    <div className={styles.content}>
      <Header title="Daljer og Pins" />

      <NavBar />

      <main className={styles.main}>
        <h1 className={styles.title}>Daljer og Pins</h1>
        <p className={styles.description}>Jubileumsdaljer</p>
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
        <p className={styles.description}>Daljer for Verv i Abakus</p>
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
        <p className={styles.description}>Den Gylne Kulerammes Orden</p>
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
        <p className={styles.description}>Pins</p>
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
      </main>
    </div>
  );
};

export default RibbonsPage;
