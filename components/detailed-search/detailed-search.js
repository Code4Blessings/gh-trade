import React, { Component } from "react";
import Link from "next/link";
import "../../public/styles/Main.scss";
import {
  LocationSelectMenu,
  TypeSelectMenu,
  MakeSelectMenu,
  MileageSelectMenu,
  YearSelectMenu,
  TransmissionSelectMenu,
  EngineSizeSelectMenu,
  ColorSelectMenu,
  MinPriceSelectMenu,
  MaxPriceSelectMenu
} from "../_shared/index.js";

export default () => {
  return (
    <section className="detailed-search">
      <form className="default-form">
        <h2>Find New & Second Hand Cars</h2>
        <p>Search new and used cars by make and model</p>
        <LocationSelectMenu />
        <TypeSelectMenu />
        <MakeSelectMenu />
        <MileageSelectMenu />
        <YearSelectMenu />
        <TransmissionSelectMenu />
        <EngineSizeSelectMenu />
        <ColorSelectMenu />
        <MinPriceSelectMenu />
        <MaxPriceSelectMenu />
        <div className="clearfix" />
        <button className="red-button">Search</button>
      </form>
    </section>
  );
};
