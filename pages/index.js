import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import Navbar from "../components/navbar/navbar";
import Banner from "../components/banner/banner";
import EventSlider from "../components/event-slider/event-slider";
import BlogSlider from "../components/blog-slider/blog-slider";
import ContactUsWidget from "../components/contact-us-widget/contact-us-widget";
import Footer from "../components/footer/footer";
import basePath from "../helpers/client/basePath.js";

const home = props => {
  return (
    <section>
      <Head>
        <title>Emekliyim Mutluyum</title>
        <meta name="description" content="Emekliyim mutluyum aciklamasi" />
      </Head>
      <Navbar />
      <Banner />
      <EventSlider />
      <BlogSlider blogs={props.blogs} />
      <ContactUsWidget />
      <Footer />
    </section>
  );
};

home.getInitialProps = async () => {
  let _blogs = await fetch(`${basePath}/iso/fetch/homepage/initial`);
  _blogs = await _blogs.json();

  return {
    blogs: _blogs.length ? _blogs : []
  };
};

export default home;
