import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import Navbar from "../components/navbar/navbar";
import AuthorsList from "../components/authors-list/authors-list";
import basePath from "../helpers/client/basePath.js";
import Footer from "../components/footer/footer";

const authors = props => {
  return (
    <section>
      <Head>
        <title>Emekliyim Mutluyum</title>
        <meta name="description" content="Emekliyim mutluyum aciklamasi" />
      </Head>
      <Navbar />
      <AuthorsList authors={props.authors} />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </section>
  );
};

authors.getInitialProps = async () => {
  let _auhors = await fetch(`${basePath}/iso/fetch/authors-list`);
  _auhors = await _auhors.json();
  return {
    authors: _auhors[0] && _auhors[0].blog ? _auhors[0].blog : []
  };
};

export default authors;
