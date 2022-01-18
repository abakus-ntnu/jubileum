import { AppBar, Tabs, Tab, Toolbar } from "@mui/material";
import React from "react";
import { useRouter } from "next/dist/client/router";
import jubileum_theme from "./Theme";
import { ThemeProvider } from "@mui/material";
import styles from "../styles/NavBar.module.css";
import Image from "next/image";
import abakus45 from "../assets/abakus_logo_2.png";

const NavBar = () => {
  const router = useRouter();

  const handleChange = (path: string): void => {
    void router.push(path);
  };

  return (
    <ThemeProvider theme={jubileum_theme}>
      <AppBar position="static">
        <Toolbar className={styles.Toolbar}>
          <Tabs
            value={router.pathname}
            className={styles.Tabs}
            scrollButtons="auto"
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
              className={styles.Tab}
            />
            <Tab
              value="/leaderboard"
              component="a"
              label="Scoreboard"
              className={styles.Tab}
            />
            <Tab
              value="/"
              component="a"
              icon={<Image src={abakus45} width={35} height={35} alt={""} />}
              className={styles.Tab}
            />
            <Tab
              value="/timeline"
              component="a"
              label="Abakus Historie"
              className={styles.Tab}
            />
            <Tab
              value="/members"
              component="a"
              label="Æresmedlemmer"
              className={styles.Tab}
            />
          </Tabs>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default NavBar;
