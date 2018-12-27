import React, { Component } from "react";
import Link from "next/link";
import "../../public/styles/Main.scss";

const navbar = props => {
  return (
    <section className="navbar">
      <div className="navbar-logo">
        <img src="/static/images/logo.jpg" alt="Emekliyim mutluyum anasayfa" />
      </div>
      <div className="navbar-burger">
        <span className="top" />
        <span className="middle" />
        <span className="bottom" />
      </div>
    </section>
  );
};

export default navbar;
