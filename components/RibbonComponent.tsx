import React from "react";
import { Box, Card, ThemeProvider, Typography } from "@mui/material";
import styles from "../styles/RibbonsPage.module.css";
import jubileum_theme from "./Theme";

export interface RibbonProps {
  medalType: string;
  medalDesign: string;
  medalInformation: string;
  imageLink: string;
  filterTag: string;
}

const ribbonComponent = ({ ribbonType }: { ribbonType: RibbonProps }) => {
  // Take in dalje enum as param and render picture + context accordingly.
  const description =
    ribbonType != null ? ribbonType.medalDesign : "MedalDesign";
  const info =
    ribbonType != null ? ribbonType.medalInformation : "MedalInformation";
  const imgSrc = ribbonType != null ? ribbonType.imageLink : "/SampleDalje.png";

  const imageStyles = {
    paperContainer: {
      backgroundImage: `url(${imgSrc})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      height: "90%",
      width: "90%",
    },
  };

  return (
    <ThemeProvider theme={jubileum_theme}>
      <Card className={styles.card}>
        <Typography variant="h2" color="primary">
          {ribbonType.medalType}
          </Typography>
        <Card className={styles.innerCard}>
          <Box style={imageStyles.paperContainer} margin="auto"></Box>
        </Card>
        <p className={styles.cardDescription}>{description}</p>
        <p className={styles.cardDescription}>{info}</p>
      </Card>
    </ThemeProvider>
  );
};

export default ribbonComponent;
