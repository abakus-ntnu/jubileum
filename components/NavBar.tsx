import { AppBar, Tabs, Tab, Toolbar } from "@mui/material";
import React from "react";
import { useRouter } from "next/dist/client/router";
import jubileum_theme from "./Theme";
import { ThemeProvider } from "@mui/material";

const NavBar = () => {
  const router = useRouter();

  const handleChange = (path: string): void => {
    void router.push(path);
  };

  return (
    <ThemeProvider theme={jubileum_theme}>
      <AppBar position="static" sx={{ backgroundColor: "#DAA520"}} >
        <Toolbar sx={{height: 50}}>
          <Tabs 
          value={router.pathname} 
          variant="scrollable"
          scrollButtons="auto"
          indicatorColor="primary"
          onChange={(evt, newValue: string) => handleChange(newValue)} centered>
            <Tab value="/" component="a" label="Hjem" sx={{color: '#ffffff'}}/>
            <Tab value="/ribbons" component="a" label="Daljer, Pins og Bånd" sx={{color: '#ffffff'}}/>
            <Tab value="/leaderboard" component="a" label="Scoreboard" sx={{color: '#ffffff'}}/>
            <Tab value="/timeline" component="a" label="Abakus Historie" sx={{color: '#ffffff'}}/>
            <Tab value="/members" component="a" label="Æresmedlemmer" sx={{color: '#ffffff'}}/>
          </Tabs>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default NavBar;
