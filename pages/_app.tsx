import "/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import jubileum_theme from "components/Theme";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <ThemeProvider theme={jubileum_theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
