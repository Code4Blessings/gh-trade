import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import Navbar from "../components/navbar/navbar";
import LoginAndProfile from "../components/login-and-profile/login-and-profile";
import Footer from "../components/footer/footer";

const loginOrProfile = props => {
  return (
    <section>
      <Head>
        <title>Emekliyim Mutluyum</title>
        <meta name="description" content="Emekliyim mutluyum aciklamasi" />
      </Head>
      <Navbar />
      <LoginAndProfile authenticated={props.authenticated} />
      <Footer />
    </section>
  );
};

loginOrProfile.getInitialProps = async function({ req }) {
  const authenticated = req.session && req.session.userID ? true : false;
  return {
    authenticated
  };
};

export default loginOrProfile;
