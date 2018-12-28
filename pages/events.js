import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import Navbar from "../components/navbar/navbar";
import EventSlider from "../components/event-slider/event-slider";
import Footer from "../components/footer/footer";

const events = props => {
  return (
    <section>
      <Head>
        <title>Emekliyim Mutluyum</title>
        <meta name="description" content="Emekliyim mutluyum aciklamasi" />
      </Head>
      <Navbar />
      <EventSlider eventPage={true} />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </section>
  );
};

export default events;
