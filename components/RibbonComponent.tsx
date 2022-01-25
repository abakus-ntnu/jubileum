import React from "react";
import { Box, Card, ThemeProvider, Typography } from "@mui/material";
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
      transform: "translateY(6%)",
      height: "90%",
      width: "90%",
    },
  };

  const cardStyles = {
    cardTitleBox: {
      height: "69px",
      width: "80%",
      marginLeft: "10%",
      marginRight: "10%",
      marginTop: "2%",
      marginBottom: "1%",
    },
    card: {
      margin: "0",

      color: "#000000",
      backgroundColor: "#eb4034",
      textDecoration: "none",
      borderColor: "#8a251e5b",
      borderLeft: "10px solid #8a251e5b",
      borderTop: "4px solid #8a251e5b",
      borderRight: "4px solid #8a251e5b",
      borderBottom: "10px solid #8a251e5b",
      borderRadius: "35px",
      transition: "color 0.15s ease, border-color 0.15s ease",
      width: "300px",
      height: "450px",
    },
    innerCard: {
      backgroundColor: "white",
      borderTop: "3px solid #eeeeee",
      borderLeft: "7px solid #eeeeee",
      borderRight: "3px solid #eeeeee",
      borderBottom: "7px solid #eeeeee",
      borderColor: "#eaeaea",
      borderRadius: "75px",
      margin: "0.5rem",
      height: "75%",
      marginLeft: "8%",
      marginRight: "8%",
      marginBottom: "2%",
    },
  };

  return (
    <ThemeProvider theme={jubileum_theme}>
      <Card sx={cardStyles.card}>
        <Box sx={cardStyles.cardTitleBox}>
          <Typography variant="h5" color="primary" align="center">
            {ribbonType.medalType}
          </Typography>
        </Box>
        <Card sx={cardStyles.innerCard}>
          <Box sx={imageStyles.paperContainer} margin="auto"></Box>
        </Card>
      </Card>
    </ThemeProvider>
  );
};

export default ribbonComponent;
