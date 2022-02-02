import React, { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import Header from "./Header";
import NavBar from "./NavBar";

/**
 * Wrapper for all Jubilee pages that contain a Header, NavBar and have some padding around the content
 */

const JubPage: FunctionComponent<{ title: string; header?: string }> = ({
  title,
  header,
  children,
}) => {
  return (
    <>
      <Header title={title} />
      <NavBar />
      <Box component="main" margin={3}>
        {header && <Typography variant="h1">{header}</Typography>}
        {children}
      </Box>
    </>
  );
};

export default JubPage;
