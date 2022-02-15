/*
This is a component used on the index.tsx page
Generally speaking, you should strive to keep different parts of your code nice and separated, so components is the way to go
This folder is where you are to put all your components
*/

/* 
This is the components for the Jubileum program.
*/

import { Card, CardContent, Typography } from "@mui/material";
import styles from "../styles/Program.module.css";
import Image from "next/image";
import { isMobile } from "react-device-detect";

export interface ProgramProps {
  title: string;
  information: string;
  banner: string;
  timestamp: string;
}

const ProgramComponent = ({ program }: { program: ProgramProps }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 1200 }} className={styles.card}>
        <Image
          src={program.banner}
          width={isMobile ? "900" : "1200"}
          height={isMobile ? "270" : "360"}
        />
        <CardContent>
          <Typography
            sx={{
              fontSize: { xs: 25, md: 43 },
              display: "flex",
              justifyContent: "space-between",
              fontFamily: "LatoRegular",
            }}
          >
            {program.title}
            <Typography
              sx={{
                fontSize: { xs: 22, md: 30 },
                fontFamily: "LatoRegular",
              }}
            >
              {program.timestamp}
            </Typography>
          </Typography>
          <Typography
            variant={"h5"}
            sx={{
              fontFamily: "LatoRegular",
              lineHeight: 1.5,
              inlineSize: { md: 1000 },
              fontSize: { xs: 20, md: 24 },
            }}
          >
            {program.information}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgramComponent;
