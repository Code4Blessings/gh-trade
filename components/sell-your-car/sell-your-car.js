import React, { Component } from "react";
import Link from "next/link";
import "../../public/styles/Main.scss";
const carPng = "/static/images/sell-your-car.png";

export default () => {
  return (
    <section className="sell-your-car">
      <div className="sell-your-car__left">
        <h2>Sell your car easily</h2>
        <p>Every 3 minutes someone chooses to sell on Akwaba Auto Trader</p>
        <form>
          <label>Mileage</label>
          <input type="number" placeholder=" e.g 3000" />
          <label>Price</label>
          <input type="number" placeholder=" e.g 25000" />
          <button className="red-button">Sell your car</button>
        </form>
      </div>
      <div className="sell-your-car__right">
        <img src={carPng} />
      </div>
    </section>
  );
};
