import React, { Component } from "react";
import Link from "next/link";
import "../../public/styles/Main.scss";
import {
  LocationSelectMenu,
  MakeSelectMenu,
  MinPriceSelectMenu,
  MaxPriceSelectMenu
} from "../_shared/index.js";

export default () => {
  return (
    <section className="search-auto">
      <h2>Search new & used cars</h2>
      <form>
        <LocationSelectMenu />
        <MakeSelectMenu />
        <MinPriceSelectMenu />
        <MaxPriceSelectMenu />
        <button className="red-button">Search</button>
        <Link href="/search/detailed">
          <a className="search-more">More search options</a>
        </Link>
      </form>
    </section>
  );
};
