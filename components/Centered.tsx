import { Grid, GridProps } from "@mui/material";

const Centered = (props: GridProps) => {
  return (
    <Grid container justifyContent="center" alignItems="center" {...props} />
  );
};

export default Centered;
