import { AppBar, Tabs, Tab, Toolbar } from "@mui/material";
import React from "react";
import { useRouter } from "next/dist/client/router";
import jubileum_theme from "./Theme";
import { ThemeProvider } from "@mui/material";
import styles from "../styles/NavBar.module.css";
import Image from "next/image";
import abakus45 from "../assets/abakus_logo_2.png";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";

const NavBar = () => {
  const router = useRouter();

  const handleChange = (path: string): void => {
    void router.push(path);
  };
  const [openMenu, setOpneMenu] = React.useState(false);
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setOpneMenu(open);
    };

  const displayTabs = (isVertical: boolean) => (
    <>
      <Tabs
        value={router.pathname}
        className={isVertical ? styles.hamTabs : styles.Tabs}
        scrollButtons="auto"
        orientation={isVertical ? "vertical" : "horizontal"}
        indicatorColor="primary"
        TabIndicatorProps={{
          children: <span className={styles.indicatorSpan} />,
        }}
        variant="scrollable"
        onChange={(evt, newValue: string) => handleChange(newValue)}
      >
        <Tab
          value="/ribbons"
          component="a"
          label="Daljer og Pins"
          className={isVertical ? styles.verticalTab : styles.horizontalTab}
        />
        <Divider />
        <Tab
          value="/leaderboard"
          component="a"
          label="Scoreboard"
          className={isVertical ? styles.verticalTab : styles.horizontalTab}
        />
        <Divider />
        <Tab
          value="/"
          component="a"
          icon={<Image src={abakus45} width={35} height={35} alt={""} />}
          className={isVertical ? styles.horizontalTab : styles.verticalTab}
        />
        <Divider />
        <Tab
          value="/timeline"
          component="a"
          label="Abakus Historie"
          className={isVertical ? styles.verticalTab : styles.horizontalTab}
        />
        <Divider />
        <Tab
          value="/members"
          component="a"
          label="Æresmedlemmer"
          className={isVertical ? styles.verticalTab : styles.horizontalTab}
        />
      </Tabs>
      {!isVertical && displayMenu}
    </>
  );

  const displayMenu = (
    <div className={styles.hamburger}>
      <React.Fragment>
        <MenuIcon
          color="primary"
          sx={{ fontSize: 40 }}
          onClick={toggleDrawer(true)}
        ></MenuIcon>
        <Drawer anchor={"right"} open={openMenu} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: 190, height: 3000, backgroundColor: "#eb4034" }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            {displayTabs(true)}
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  );

  return (
    <ThemeProvider theme={jubileum_theme}>
      <AppBar position="static">
        <Toolbar className={styles.Toolbar}>{displayTabs(false)}</Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default NavBar;
