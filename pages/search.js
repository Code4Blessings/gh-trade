import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import basePath from "../helpers/client/basePath.js";

// components
import Nav from "../components/nav/nav";
import NavMenu from "../components/nav-menu/nav-menu";
import NavbarSlim from "../components/nav-slim/nav-slim.js";
import DetailedSearch from "../components/detailed-search/detailed-search.js";

const search = props => {
  return (
    <section>
      <Head>
        <title>Akwaba Autotrader</title>
        <meta name="description" content="Ghana auto trading web platform" />
      </Head>
      <Nav />
      <NavMenu />
      <NavbarSlim />
      <DetailedSearch />
    </section>
  );
};

export default search;
