import React, { Component } from "react";
import Link from "next/link";
import "../../public/styles/Main.scss";
import Burger from "../burger/burger.js";
const logo = "/static/images/logo.png";

export default () => {
  return (
    <section className="nav">
      <div className="nav__logo">
        <Link href="/">
          <a title="Go to home page">
            <img src={logo} alt="Akwaba auto trade logo" />
          </a>
        </Link>
      </div>
      <Burger />
    </section>
  );
};
