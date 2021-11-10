import { useState } from "react";
import { Box, Typography, Tab, Tabs } from "@mui/material";
import TheOrderMember from "./theOrderMember";
import { orderMembers } from "../data/theOrderUtils";
import styles from "../styles/Member.module.css";

const viewOrderMembers = (appointed: string) =>
  orderMembers.map((member) => {
    if (appointed === member.appointed) {
      return <TheOrderMember member={member} />;
    }
  });

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
};

const TheOrder = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const indexList = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const viewTabPanels = indexList.map((index) => (
    <TabPanel key={index} value={value} index={index}>
      <div className={styles.tabPanelsStyle}>
        {viewOrderMembers(`${2021 - index}`)}
      </div>
    </TabPanel>
  ));

  const viewTabs = indexList.map((index) => (
    <Tab key={index} label={`${2021 - index}`} {...a11yProps(index)} />
  ));

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 1100,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider", minWidth: 100 }}
      >
        {viewTabs}
      </Tabs>
      {viewTabPanels}
    </Box>
  );
};

export default TheOrder;
