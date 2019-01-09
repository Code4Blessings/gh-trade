/**
 *  Receives a form component as props via props.formToRender
 */

import React, { Component } from "react";
import Link from "next/link";
import "../../public/styles/Main.scss";
const carImg = "/static/images/cars-for-sale.png";

export default props => {
  return (
    <section className="sell-your-car">
      <div className="sell-your-car__left">{props.formToRender()}</div>
      <div className="sell-your-car__right">
        <img src={carImg} />
      </div>
    </section>
  );
};
