import React from "react";
import { Box, Card } from "@mui/material";
import Image from "next/image";

export interface RibbonProps {
  medalType: string;
  medalDesign: string;
  medalInformation: string;
  imageLink: string;
}

const ribbonComponent = ({ ribbonType }: { ribbonType: RibbonProps }) => {
  // Take in dalje enum as param and render picture + context accordingly.
  const description =
    ribbonType != null ? ribbonType.medalDesign : "MedalDesign";
  const info =
    ribbonType != null ? ribbonType.medalInformation : "MedalInformation";
  const imgSrc = ribbonType != null ? ribbonType.imageLink : "/SampleDalje.png";

  return (
    <div>
      <Card
        sx={{ textAlign: "center", width: "240px", height: "360px" }}
        variant="outlined"
        style={{ backgroundColor: "red" }}
      >
        <Box sx={{ textAlign: "center", width: "200px", height: "20px" }}>
          <p style={{ fontSize: "20px" }}>{ribbonType.medalType}</p>
        </Box>
        <Image src={imgSrc} width={240} height={240} alt="Ribbon" />
        <p>{description}</p>
        <p>{info}</p>
      </Card>
    </div>
  );
};

export default ribbonComponent;
