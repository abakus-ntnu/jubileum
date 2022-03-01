import { AppBar, Tabs, Tab, Drawer, Toolbar } from "@mui/material";
import React from "react";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import abakus45Logo from "assets/logo_dark.png";
import MenuIcon from "@mui/icons-material/Menu";
import Centered from "./Centered";

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

  const NavTabs = ({ drawer }: { drawer?: boolean }) => {
    const createTab = (value: string, label: string) => (
      <Tab
        component="a"
        sx={{
          padding: drawer ? 3 : 2,
          display: drawer ? "inline-flex" : { xs: "none", md: "inline-flex" },
          color: "secondary.main",
        }}
        label={label}
        value={value}
      />
    );

    const homeTab = (
      <Tab
        value="/"
        component="a"
        sx={{ display: "block", m: drawer ? "1rem 0" : 0 }}
        icon={
          <Image
            src={abakus45Logo}
            layout="fill"
            objectFit="contain"
            alt={"Jubileumslogo"}
          />
        }
      />
    );

    return (
      <>
        <Tabs
          value={router.pathname}
          scrollButtons={false}
          orientation={drawer ? "vertical" : "horizontal"}
          indicatorColor="secondary"
          textColor="secondary"
          sx={{ opacity: 1 }}
          variant="scrollable"
          onChange={(evt, newValue: string) => handleChange(newValue)}
        >
          {drawer && homeTab}
          {createTab("/ribbons", "Daljer og Pins")}
          {createTab("/leaderboard", "Scoreboard")}
          {drawer || homeTab}
          {createTab("/timeline", "Abakus Historie")}
          {createTab("/members", "Utnevnte")}
          {/* createTab("/code-competition", "Kodekonkurranse") */}
        </Tabs>
        {drawer || displayMenu}
      </>
    );
  };

  const displayMenu = (
    <>
      <MenuIcon
        fontSize="large"
        color="secondary"
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
          sx: { backgroundColor: "background" },
        }}
      >
        <NavTabs drawer />
      </Drawer>
    </>
  );

  return (
    <>
      <AppBar
        elevation={0}
        position="fixed"
        sx={{ height: height, backgroundColor: "background.default" }}
      >
        <Centered height="100%">
          <NavTabs />
        </Centered>
      </AppBar>
      <Toolbar sx={{ height: height }} />
    </>
  );
};

export default NavBar;
