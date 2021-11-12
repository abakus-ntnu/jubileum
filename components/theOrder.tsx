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
    <div hidden={value !== index} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
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
    <Tab key={index} label={`${2021 - index}`} />
  ));

  const TabsWrapper = ({
    mobile,
    className,
  }: {
    mobile?: boolean;
    className: string;
  }) => (
    <Tabs
      className={className}
      orientation={mobile ? "horizontal" : "vertical"}
      variant="scrollable"
      value={value}
      onChange={handleChange}
      sx={{ borderRight: 1, borderColor: "divider", minWidth: 100 }}
      TabIndicatorProps={{ style: { background: "yellow" } }}
    >
      {viewTabs}
    </Tabs>
  );

  const getNumberOfMembersByYear = orderMembers.reduce((previous, member) => {
    if (member.appointed === String(2021 - value)) {
      previous++;
    }
    return previous;
  }, 0);

  const boxStyle = {
    flexGrow: 1,
    bgcolor: "background.paper",
    display: "flex",
    height: {
      md: 900,
      xs: getNumberOfMembersByYear * 300,
    },
  };

  return (
    <div>
      <TabsWrapper mobile className={styles.tmob} />
      <Box sx={boxStyle}>
        <TabsWrapper className={styles.tdesk} /> {viewTabPanels}
      </Box>
    </div>
  );
};

export default TheOrder;
