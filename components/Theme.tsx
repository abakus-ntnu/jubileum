import { createTheme } from "@mui/material/styles";

const jubileum_theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#57995a",
    },
  },
  typography: {
    fontSize: 17,
    fontFamily: "SoraRegular",
  },
  components: {
    MuiTab: {
      styleOverrides: {
        textColorPrimary: "white",
      },
    },
  },
});

export default jubileum_theme;
