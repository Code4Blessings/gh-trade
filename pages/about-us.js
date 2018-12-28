import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import AboutUs from "../components/about-us/about-us";

const aboutUs = props => {
  return (
    <section>
      <Head>
        <title>Emekliyim Mutluyum</title>
        <meta name="description" content="Emekliyim mutluyum aciklamasi" />
      </Head>
      <Navbar />
      <AboutUs />
      <br />
      <br />
      <br />
      <Footer />
    </section>
  );
};

export default aboutUs;
