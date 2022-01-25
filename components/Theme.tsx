import { createTheme } from "@mui/material/styles";

const jubileum_theme = createTheme({
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
  },
});

export default jubileum_theme;
