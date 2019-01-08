import React, { Component } from "react";
import Link from "next/link";
import "../../public/styles/Main.scss";
const logo = "/static/images/logo.png";

const navbar = () => {
  return (
    <section className="navbar component-main-layout-width">
      <div className="navbar__logo">
        <Link href="/">
          <a title="Go to home page">
            <img src={logo} alt="Akwaba auto trade logo" />
          </a>
        </Link>
      </div>
      <div className="navbar__navigation">
        <div className="navbar__navigation-menu">
          <Link href="#">
            <a className="navbar__navigation-menu-item">Buy car</a>
          </Link>
          <Link href="#">
            <a className="navbar__navigation-menu-item">Sell your car</a>
          </Link>
          <Link href="#">
            <a className="red-button">Sign in</a>
          </Link>
        </div>
      </div>
      <div className="navbar__burger">
        <div id="burger-icon" onClick={handleBurgerClick}>
          <span />
        </div>
      </div>
    </section>
  );
};

function handleBurgerClick(e) {
  e.target.classList.toggle("icon-btn-active");
}
export default navbar;
