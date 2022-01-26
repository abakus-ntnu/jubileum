import "/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import jubileum_theme from "components/Theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={jubileum_theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
