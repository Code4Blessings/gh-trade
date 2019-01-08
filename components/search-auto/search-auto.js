import React, { Component } from "react";
import Link from "next/link";
import "../../public/styles/Main.scss";

export default () => {
  return (
    <section className="search-auto">
      <h2>New & Used cars</h2>
      <form>
        <select>
          <option value="">Select Town</option>
          <option>Accra</option>
          <option>Kumasi</option>
          <option>Capecost</option>
        </select>
        <select>
          <option value="">Make (Any)</option>
          <option>Any</option>
          <option>Audi</option>
          <option>Bmw</option>
          <option>Mercedes</option>
        </select>
        <select>
          <option value="">Min Price</option>
          <option>From 0</option>
          <option>From 1000</option>
          <option>From 5000</option>
          <option>From 10000</option>
        </select>
        <select>
          <option value="">Max Price</option>
          <option>To 10000</option>
          <option>To 15000</option>
          <option>To 30000</option>
          <option>To 50000</option>
        </select>
        <button>Search</button>
        <Link href="#">
          <a className="search-more">More search options</a>
        </Link>
      </form>
    </section>
  );
};
