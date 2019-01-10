import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import basePath from "../helpers/client/basePath.js";

// components
import Nav from "../components/nav/nav";
import NavMenu from "../components/nav-menu/nav-menu";
import Banner from "../components/banner/banner.js";
import NavbarSlim from "../components/nav-slim/nav-slim.js";
import CarTypes from "../components/car-types/car-types.js";
import AnimatedForms from "../components/animated-forms/animated-forms.js";

const home = props => {
  return (
    <section>
      <Head>
        <title>Akwaba Autotrader</title>
        <meta name="description" content="Ghana auto trading web platform" />
      </Head>
      <Nav />
      <NavMenu />
      <NavbarSlim />
      <Banner />
      <AnimatedForms formToRender={{ ref: "preregister" }} />
      <CarTypes />
    </section>
  );
};

export default home;
