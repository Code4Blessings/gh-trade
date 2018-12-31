import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import Navbar from "../components/navbar/navbar";
import EventSlider from "../components/event-slider/event-slider";
import basePath from "../helpers/client/basePath.js";
import Footer from "../components/footer/footer";

const events = props => {
  return (
    <section>
      <Head>
        <title>Emekliyim Mutluyum</title>
        <meta name="description" content="Emekliyim mutluyum aciklamasi" />
      </Head>
      <Navbar />
      <EventSlider eventPage={true} events={props.events} />
      <br />
      <br />
      <br />
      <Footer />
    </section>
  );
};

events.getInitialProps = async () => {
  let _events = await fetch(`${basePath}/iso/fetch/eventspage/initial`);
  _events = await _events.json();

  return {
    events: _events.length ? _events : []
  };
};

export default events;
