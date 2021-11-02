import { AppBar, Tabs, Tab, Toolbar } from "@mui/material";
import React from "react";
import { useRouter } from "next/dist/client/router";

const NavBar = () => {
  const router = useRouter();

  const handleChange = (path: string): void => {
    void router.push(path);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#050505" }}>
      <Toolbar>
        <Tabs
          value={router.pathname}
          onChange={(evt, newValue: string) => handleChange(newValue)}
        >
          <Tab value="/" component="a" label="Hjem" />
          <Tab value="/ribbons" component="a" label="Daljer, Pins og Bånd" />
          <Tab value="/readme" component="a" label="Noe fra readme" />
          <Tab value="/leaderboard" component="a" label="Scoreboard" />
          <Tab value="/timeline" component="a" label="Abakus Historie" />
          <Tab value="/honorary-members" component="a" label="Æresmedlemmer" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
