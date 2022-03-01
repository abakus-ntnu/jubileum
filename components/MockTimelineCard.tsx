import React, { FunctionComponent } from "react";
import { Card, Typography } from "@mui/material";

const MockTimelineCard: FunctionComponent<{ header: string }> = ({
  header,
  children,
}) => {
  return (
    <Card
      sx={{
        borderTop: 3,
        borderColor: "primary.main",
        p: 3,
        m: "auto",
        maxWidth: 800,
      }}
    >
      <Typography
        variant="h4"
        mt={0}
        mb={2}
        textAlign="center"
        fontWeight="bold"
      >
        {header}
      </Typography>
      {children}
    </Card>
  );
};

export default MockTimelineCard;
