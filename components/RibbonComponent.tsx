import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { medalDescriptions } from "../data/ribbonUtils";

const ribbonComponent = ({ ribbonType }: { ribbonType: string }) => {
  // Take in dalje enum as param and render picture + context accordingly.
  const theObjectIWant = medalDescriptions[ribbonType];

  const description =
    theObjectIWant != null ? theObjectIWant.medalDesign : "MedalDesign";
  const info =
    theObjectIWant != null
      ? theObjectIWant.medalInformation
      : "MedalInformation";
  const imgSrc =
    theObjectIWant != null ? theObjectIWant.imageLink : "/SampleDalje.png";

  return (
    <div>
      <Box sx={{ textAlign: "center", width: "240px", height: "360px" }}>
        <Box sx={{ textAlign: "center", width: "200px", height: "20px" }}>
          <p style={{ fontSize: "20px" }}>{ribbonType.toString()}</p>
        </Box>
        <Image src={imgSrc} width={240} height={240} alt="" />
        <p>{description}</p>
        <p>{info}</p>
      </Box>
    </div>
  );
};

export default ribbonComponent;
