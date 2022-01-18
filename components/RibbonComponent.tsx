import React from "react";
import { Box, Card } from "@mui/material";

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
      height: "260px",
      width: "240px",
    },
  };

  return (
    <div>
      <Card
        sx={{ textAlign: "center", width: "240px", height: "480px" }}
        variant="outlined"
        style={{ backgroundColor: "red" }}
      >
        <div>
          <p style={{ fontSize: "20px" }}>{ribbonType.medalType}</p>
        </div>
        <Box style={imageStyles.paperContainer}></Box>
        <p>{description}</p>
        <p>{info}</p>
      </Card>
    </div>
  );
};

export default ribbonComponent;
