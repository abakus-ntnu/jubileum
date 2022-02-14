import React from "react";
import Head from "next/head";

interface IHeaderProps {
  title: string;
}

const Header = (props: IHeaderProps) => {
  return (
    <Head>
      <title>{props.title} | Abakus 45års jubileum</title>
      <meta name="description" content="" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Header;
