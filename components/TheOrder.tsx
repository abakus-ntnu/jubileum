import { SyntheticEvent, useState } from "react";
import { Tab, Tabs, Paper, Stack, Grid, Typography } from "@mui/material";
import TheOrderMember from "./TheOrderMember";
import { orderMembers } from "../data/theOrderUtils";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

const EARLIEST_YEAR = 2013;
const LATEST_YEAR = 2021;
const YEARS = Array.from(
  { length: LATEST_YEAR - EARLIEST_YEAR + 1 },
  (x, i) => i + EARLIEST_YEAR
).reverse();

const OrderMembers = ({
  appointedYear,
  sx,
}: {
  appointedYear: number;
  sx?: SxProps<Theme>;
}) => {
  return (
    <Stack>
      <Typography variant="h3" mt={5} mb={1}>
        Utnevnt i {appointedYear}
      </Typography>
      <Grid container spacing={2} justifyContent="center" sx={sx}>
        {orderMembers
          .filter((member) => appointedYear === member.appointed)
          .map((member) => (
            <Grid item key={member.name}>
              <TheOrderMember member={member} />
            </Grid>
          ))}
      </Grid>
    </Stack>
  );
};

const TheOrder = () => {
  const [selectedYear, setSelectedYear] = useState(LATEST_YEAR);
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setSelectedYear(newValue);
  };

  const TabsWrapper = ({
    mobile,
    sx,
  }: {
    mobile?: boolean;
    sx?: SxProps<Theme>;
  }) => (
    <Tabs
      value={selectedYear}
      orientation={mobile ? "horizontal" : "vertical"}
      variant="scrollable"
      scrollButtons={false}
      allowScrollButtonsMobile
      onChange={handleChange}
      textColor="primary"
      sx={{
        borderRight: mobile ? 0 : 2,
        borderBottom: mobile ? 2 : 0,
        borderColor: "divider",
        minWidth: 100,
        ...sx,
      }}
      TabIndicatorProps={{ style: { background: "black" } }}
    >
      {YEARS.map((year) => (
        <Tab key={year} value={year} label={`${year}`} />
      ))}
    </Tabs>
  );

  return (
    <Paper>
      <Stack alignItems="stretch" direction={{ xs: "column", md: "row" }}>
        <TabsWrapper mobile sx={{ display: { xs: "flex", md: "none" } }} />
        <TabsWrapper sx={{ display: { xs: "none", md: "flex" } }} />
        <OrderMembers appointedYear={selectedYear} sx={{ p: 4 }} />
      </Stack>
    </Paper>
  );
};

export default TheOrder;
