import React, { Component } from "react";
import Link from "next/link";
import "../../public/styles/Main.scss";
import SearchAuto from "../search-auto/search-auto.js";

export default () => {
  return (
    <section className="banner">
      <div className="banner-gap" />
      <SearchAuto />
    </section>
  );
};
