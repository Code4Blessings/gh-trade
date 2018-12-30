import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import DisplayBlog from "../components/blog/blog";
import basePath from "../helpers/client/basePath.js";

const blog = props => {
  return (
    <section>
      <Head>
        <title>Emekliyim Mutluyum</title>
        <meta name="description" content="Emekliyim mutluyum aciklamasi" />
      </Head>
      <Navbar />
      <DisplayBlog blog={props.blog} />
      <Footer />
    </section>
  );
};

blog.getInitialProps = async ({ query }) => {
  let _blog = await fetch(`${basePath}/iso/fetch/blog/${query.id}`);
  _blog = await _blog.json();

  return {
    blog: _blog
  };
};

export default blog;
