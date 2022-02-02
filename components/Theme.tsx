import { createTheme } from "@mui/material/styles";
import { responsiveFontSizes } from "@mui/material";

let jubileum_theme = createTheme({
  palette: {
    primary: {
      main: "#e23d32",
    },
    secondary: {
      main: "#ffffff",
    },
    background: {
      default: "#eaeaea",
    },
    error: {
      main: "#b21c17",
    },
  },
  typography: {
    fontFamily: "SoraRegular",
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
