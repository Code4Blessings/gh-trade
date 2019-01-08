import React, { Component } from "react";
import Link from "next/link";
import "../../public/styles/Main.scss";

export default () => {
  return (
    <section className="menu__right" id="menu-right">
      <div className="menu__right-list">
        <Link href="#">
          <a className="menu__right-list-item yellow">Sign in</a>
        </Link>
        <Link href="#">
          <a className="menu__right-list-item green">Register</a>
        </Link>
        <Link href="#">
          <a className="advert red-button">Create your add</a>
        </Link>
      </div>
    </section>
  );
};
