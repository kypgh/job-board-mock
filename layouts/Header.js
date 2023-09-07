import Head from "next/head";
import React from "react";

const Header = ({
  title = "Job Board",
  description = "Description",
  favicon = "/favicon.ico",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={favicon} />
    </Head>
  );
};

export default Header;
