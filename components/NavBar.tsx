import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Drawer,
  Toolbar,
  Grid,
} from "@mui/material";
import React from "react";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import abakus45Logo from "assets/logo_light.png";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = ({ height = "7rem" }) => {
  const router = useRouter();

  const handleChange = async (path: string): Promise<void> => {
    await router.push(path);
  };
  const [openMenu, setOpenMenu] = React.useState(false);
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setOpenMenu(open);
    };

  const displayTabs = (isVertical: boolean) => {
    const createTab = (value: string, label: string) => (
      <Tab
        component="a"
        sx={{
          padding: isVertical ? 3 : 2,
          display: isVertical
            ? "inline-flex"
            : { xs: "none", md: "inline-flex" },
        }}
        label={label}
        value={value}
      />
    );

    return (
      <>
        <Tabs
          value={router.pathname}
          scrollButtons={false}
          orientation={isVertical ? "vertical" : "horizontal"}
          indicatorColor="secondary"
          textColor="inherit"
          color="primary"
          variant="scrollable"
          onChange={(evt, newValue: string) => handleChange(newValue)}
        >
          {createTab("/ribbons", "Daljer og Pins")}
          {createTab("/leaderboard", "Scoreboard")}
          {!isVertical && (
            <Tab
              value="/"
              component="a"
              style={{ display: "block" }}
              icon={
                <Image
                  src={abakus45Logo}
                  layout="fill"
                  objectFit="contain"
                  alt={"Jubileumslogo"}
                />
              }
            />
          )}
          {createTab("/timeline", "Abakus Historie")}
          {createTab("/members", "Utnevnte")}
        </Tabs>
        {!isVertical && displayMenu}
      </>
    );
  };

  const displayMenu = (
    <>
      <MenuIcon
        fontSize="large"
        sx={{
          position: "absolute",
          right: 40,
          display: { xs: "block", md: "none" },
        }}
        onClick={toggleDrawer(true)}
      />
      <Drawer
        anchor={"right"}
        open={openMenu}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { backgroundColor: "primary.main" },
        }}
      >
        <Typography color="secondary">{displayTabs(true)}</Typography>
      </Drawer>
    </>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ height: height }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          {displayTabs(false)}
        </Grid>
      </AppBar>
      <Toolbar sx={{ height: height }} />
    </>
  );
};

export default NavBar;
