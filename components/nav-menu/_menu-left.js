import React, { Component } from "react";
import Link from "next/link";
import "../../public/styles/Main.scss";

export default () => {
  return (
    <section className="menu__left" id="menu-left">
      <div className="menu__left-list">
        <Link href="#">
          <a className="menu__left-list-item buy-car">Buy car</a>
        </Link>
        <Link href="/user/register">
          <a className="menu__left-list-item sell-car">Sell your car</a>
        </Link>
        <Link href="#">
          <a className="menu__left-list-item search">Search</a>
        </Link>
      </div>
    </section>
  );
};
