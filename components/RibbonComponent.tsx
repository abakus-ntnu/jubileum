/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box, Card, Paper, Typography } from "@mui/material";
import Image from "next/image";

import Centered from "./Centered";

export interface RibbonProps {
  medalType: string;
  medalDesign: string;
  medalInformation: string;
  imageLink: string;
  filterTag: string;
}

const ribbonComponent = ({ ribbonType }: { ribbonType: RibbonProps }) => {
  const imgSrc = ribbonType != null ? ribbonType.imageLink : "/SampleDalje.png";

  const cardStyles = {
    cardTitleBox: {
      height: "69px",
      width: "80%",
      marginLeft: "10%",
      marginRight: "10%",
      marginTop: "5%",
      marginBottom: "1%",
      color: "#000000",
    },
    card: {
      margin: "0",

      color: "#000000",
      backgroundColor: "#ffffff",
      textDecoration: "none",
      borderColor: "#000000",
      borderLeft: "0px solid #000000",
      borderTop: "5px solid #000000",
      borderRight: "0px solid #000000",
      borderBottom: "0px solid #000000",
      borderRadius: "4px",
      transition: "color 0.15s ease, border-color 0.15s ease",
      width: "250px",
      height: "450px",
    },
    innerCard: {
      borderColor: "#eaeaea",
      borderRadius: "0px",
      margin: "0rem",
      height: "70%",
      marginTop: "0%",
      marginLeft: "8%",
      marginRight: "8%",
      marginBottom: "0%",
    },
  };

  return (
    <Card sx={cardStyles.card}>
      <Box sx={cardStyles.cardTitleBox}>
        <Typography color="secondary.main" align="center" fontSize={20}>
          {ribbonType.medalType}
        </Typography>
        <Typography color="#adadad" align="center" fontSize={15}>
          {ribbonType.medalInfo}
        </Typography>
      </Box>
      <Box sx={cardStyles.innerCard} boxShadow={0}>
        <Grid
          container
          height="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            height="90%"
            width="90%"
            boxShadow={0}
            sx={{
              position: "relative",
              boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0)",
            }}
          >
            <Image
              src={imgSrc}
              layout="fill"
              objectFit="contain"
              sizes="240px"
              alt={ribbonType.medalType}
            />
          </Box>
        </Grid>
      </Box>
    </Card>
  );
};

export default ribbonComponent;
