import React, { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import Header from "./Header";
import NavBar from "./NavBar";
import { SxProps } from "@mui/system";

/**
 * Wrapper for all Jubilee pages that contain a Header, NavBar and have some padding around the content
 */

const JubPage: FunctionComponent<{
  title: string;
  header?: string;
  sx?: SxProps;
}> = ({ title, header, children, sx }) => {
  return (
    <>
      <Header title={title} />
      <NavBar />
      <Box component="main" margin={3} sx={sx}>
        {header && <Typography variant="h1">{header}</Typography>}
        {children}
      </Box>
    </>
  );
};

export default JubPage;
