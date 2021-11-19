/*
This is a component used on the index.tsx page
Generally speaking, you should strive to keep different parts of your code nice and separated, so components is the way to go
This folder is where you are to put all your components
*/

/* 
This is the components for the Jubileum program.
*/

import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import styles from "../styles/Program.module.css";
import Image from "next/image";

export interface ProgramProps {
  title: string;
  information: string;
  banner: string;
  timestamp: Date;
}

const ProgramComponent = ({ program }: { program: ProgramProps }) => { 
  console.log(program);
  return (
    <div>
      <h1>Program</h1>
      <Card sx={{ minWidth: 1200}} className={styles.card}>
        <Image
              src={program.banner}
              layout="fixed"
              width={1200}
              height={360}
            />
        <CardContent>
          <Typography variant="h3" className={styles.headline}>
            {program.title}
            <Typography className={styles.leftside}>
              {program.timestamp}
            </Typography>
          </Typography>
          <Typography className={styles.info}>{program.information}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgramComponent;
