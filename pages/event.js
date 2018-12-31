import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import DisplayEvent from "../components/event/event";
import basePath from "../helpers/client/basePath.js";

const event = props => {
  return (
    <section>
      <Head>
        <title>Emekliyim Mutluyum</title>
        <meta name="description" content="Emekliyim mutluyum aciklamasi" />
      </Head>
      <Navbar />
      <DisplayEvent event={props.event} />
      <Footer />
    </section>
  );
};

event.getInitialProps = async ({ query }) => {
  let _event = await fetch(`${basePath}/iso/fetch/event/${query.id}`);
  _event = await _event.json();

  return {
    event: _event
  };
};

export default event;
