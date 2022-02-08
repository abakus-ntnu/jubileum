import { createTheme } from "@mui/material/styles";
import { responsiveFontSizes } from "@mui/material";

let jubileum_theme = createTheme({
  palette: {
    primary: {
      main: "#eb4034",
      light: "#ff755f",
      dark: "#B21C17",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#ffffff",
      main: "#191919",
      dark: "#000000",
    },
    background: {
      default: "#eeeeee",
    },
    error: {
      main: "#eb4034",
    },
  },
  typography: {
    fontFamily: "SoraRegular",
    fontSize: 10,
  },
  components: {
    MuiTab: {
      styleOverrides: {},

      variants: [
        {
          props: {
            disabled: false,
          },
          style: {
            opacity: 1,
            fontSize: "medium",
          },
        },
      ],
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          margin: "6rem 0 3rem 0",
          textAlign: "center",
        },
        h2: {
          margin: "6rem 0 3rem 0",
          textAlign: "center",
        },
        h3: {
          margin: "6rem 0 3rem 0",
          textAlign: "center",
        },
      },
    },
  },
});

jubileum_theme = responsiveFontSizes(jubileum_theme);

export default jubileum_theme;
