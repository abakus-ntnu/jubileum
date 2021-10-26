import React from "react";
import Head from "next/head";

interface IHeaderProps {
  title: String;
}

const Header = (props: IHeaderProps) => {
  return (
    <Head>
      <title>{props.title} | Abakus 45års jubilieum</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Header;
