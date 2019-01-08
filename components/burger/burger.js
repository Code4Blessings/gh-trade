import React, { Component } from "react";
import Link from "next/link";
import "../../public/styles/Main.scss";

export default () => {
  return (
    <section className="burger">
      <div id="burger-icon" onClick={handleBurgerClick}>
        <span />
      </div>
    </section>
  );
};

function handleBurgerClick(e) {
  e.target.classList.toggle("icon-btn-active");
  [
    document.getElementById("menu-left"),
    document.getElementById("menu-right")
  ].forEach(slider => {
    slider.classList.toggle("slide-nav-menu");
  });
}
