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

  const imgSrc = ribbonType != null ? ribbonType.imageLink : "/SampleDalje.png";

  const imageStyles = {
    paperContainer: {
      backgroundImage: `url(${imgSrc})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      transform: "translateY(7%)",
      height: "90%",
      width: "90%",
    },
  };

  return (
    <ThemeProvider theme={jubileum_theme}>
      <Card className={styles.card}>
        <Box className={styles.cardTitleBox}>
        <Typography variant="h2" color="primary">
          {ribbonType.medalType}
          </Typography>
          </Box>
        <Card className={styles.innerCard}>
          <Box style={imageStyles.paperContainer} margin="auto"></Box>
        </Card>
      </Card>
    </ThemeProvider>
  );
};

export default ribbonComponent;
