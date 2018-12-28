import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import ContactUsWidget from "../components/contact-us-widget/contact-us-widget";

const contactUs = props => {
  return (
    <section>
      <Head>
        <title>Emekliyim Mutluyum</title>
        <meta name="description" content="Emekliyim mutluyum aciklamasi" />
      </Head>
      <Navbar />
      <ContactUsWidget />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </section>
  );
};

export default contactUs;
