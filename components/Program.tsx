/*
This is a component used on the index.tsx page
Generally speaking, you should strive to keep different parts of your code nice and separated, so components is the way to go
This folder is where you are to put all your components
*/

/* 
This is the components for the Jubileum program.
*/

import { Card, CardContent, Typography, Link } from "@mui/material";
import Image from "next/image";

export interface ProgramProps {
  title: string;
  information: string;
  banner: string;
  timestamp: string;
  url?: string;
}

const ProgramComponent = ({ program }: { program: ProgramProps }) => {
  return (
    <div>
      <Card
        sx={{
          maxWidth: 1200,
          m: { xs: 2, md: 7 },
          display: "flex",
          flexDirection: "column",
          background: "transparent",
        }}
      >
        <Image src={program.banner} width={"1200"} height={"360"} />
        <CardContent>
          <Typography
            sx={{
              fontSize: { xs: 25, md: 43 },
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {program.title}
            <Typography
              sx={{
                fontSize: { xs: 22, md: 30 },
              }}
            >
              {program.timestamp}
            </Typography>
          </Typography>
          <Typography
            variant={"h5"}
            sx={{
              lineHeight: 1.5,
              inlineSize: { md: 1000 },
              fontSize: { xs: 20, md: 24 },
              whiteSpace: "pre-line",
            }}
          >
            {program.information}
          </Typography>
          <div>
            {program.url ? (
              <Link variant="h6" href={program.url}>
                Påmelding her
              </Link>
            ) : null}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgramComponent;
