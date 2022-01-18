import type { NextPage } from "next";
import RibbonComponent from "../../components/RibbonComponent";
import styles from "../../styles/RibbonsPage.module.css";
import { Grid } from "@mui/material";
import { medalDescriptions } from "../../data/ribbonUtils";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";

const RibbonsPage: NextPage = () => {
  const viewRibbons = medalDescriptions.map((ribbonType) => {
    return (
      <Grid item xs="auto" key={ribbonType.medalType}>
        <RibbonComponent ribbonType={ribbonType} />
      </Grid>
    );
  });

  return (
    <div className={styles.content}>
      <Header title="Daljer, Pins og Bånd" />

      <NavBar />

      <main className={styles.main}>
        <h1 className={styles.title}>Daljer, Pins og Bånd</h1>

        <p className={styles.description}>Info om daljer</p>
        <div>
          <Grid
            container
            spacing={5}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {viewRibbons}
          </Grid>
        </div>
      </main>
    </div>
  );
};

export default RibbonsPage;
