import React, { Component } from "react";
import Link from "next/link";
import "../../public/styles/Main.scss";

export default () => {
  return (
    <section className="nav-slim">
      <Link href="#">
        <a className="van">Vans</a>
      </Link>
      <Link href="#">
        <a className="bike">Bikes</a>
      </Link>
      <Link href="#">
        <a className="truck">Trucks</a>
      </Link>
    </section>
  );
};
