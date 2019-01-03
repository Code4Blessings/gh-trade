import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import Navbar from "../components/navbar/navbar";
import basePath from "../helpers/client/basePath.js";

const home = props => {
  return (
    <section>
      <Head>
        <title>Ghana Autotrader</title>
        <meta name="description" content="Ghana auto trading web platform" />
      </Head>
      <Navbar />
    </section>
  );
};

export default home;
