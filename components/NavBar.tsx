import { AppBar, Tabs, Tab, Toolbar } from "@mui/material";
import React from "react";
import { Router, withRouter } from "next/dist/client/router";

class NavBar extends React.Component<{ router: Router }> {
  handleChange(path: string): void {
    void this.props.router.push(path);
  }

  render() {
    return (
      <AppBar position="static" sx={{ backgroundColor: "#050505" }}>
        <Toolbar>
          <Tabs
            value={this.props.router.pathname}
            onChange={(evt, newValue: string) => this.handleChange(newValue)}
          >
            <Tab value="/" component="a" label="Hjem" />
            <Tab value="/ribbons" component="a" label="Daljer, Pins og Bånd" />
            <Tab value="/readme" component="a" label="Noe fra readme" />
            <Tab value="/leaderboard" component="a" label="Scoreboard" />
            <Tab value="/timeline" component="a" label="Abakus Historie" />
            <Tab
              value="/honorary-members"
              component="a"
              label="Æresmedlemmer"
            />
          </Tabs>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(NavBar);
