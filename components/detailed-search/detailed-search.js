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
  MinPriceSelectMenu
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
        <select>
          <option value="">Max Price (any)</option>
          <option value="5000">To 5000</option>
          <option value="10000">To 10000</option>
          <option value="15000">To 15000</option>
          <option value="20000">To 20000</option>
          <option value="25000">To 25000</option>
          <option value="30000">To 30000</option>
          <option value="35000">To 35000</option>
          <option value="40000">To 40000</option>
          <option value="45000">To 45000</option>
          <option value="50000">To 50000</option>
          <option value="60000">To 60000</option>
          <option value="75000">To 75000</option>
          <option value="100000">To 100000</option>
          <option value="150000">To 150000</option>
        </select>
        <div className="clearfix" />
        <button className="red-button">Search</button>
      </form>
    </section>
  );
};
