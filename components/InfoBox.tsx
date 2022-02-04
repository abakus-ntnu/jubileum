import styles from "../styles/Member.module.css";
import Typography from "@mui/material/Typography";
import { Card, CardContent, CardHeader, Stack } from "@mui/material";
import React, { FunctionComponent } from "react";

const InfoBox: FunctionComponent<{ title: string; text: string }> = ({
  title,
  text,
}) => {
  return (
    <Stack className={styles.pageStackStyle} direction="column">
      <Card>
        <CardHeader
          title={title}
          sx={{
            backgroundColor: "primary.main",
            color: "primary.contrastText",
          }}
        />
        <CardContent>
          <Typography variant="body1" fontSize="small">
            {text}
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default InfoBox;
