import React, { Component } from "react";
import Link from "next/link";
import "../../public/styles/Main.scss";

const becomeMemberWidget = props => {
  return (
    <section className="become-member-widget align-body">
      <h1>Bize Ulasin</h1>
      <form>
        <div className="become-member-widget-flex-cell">
          <label>Email veya Telefon</label>
          <input type="text" placeholder=" ..." />
        </div>
        <div className="become-member-widget-flex-cell">
          <label>Mesajiniz</label>
          <textarea placeholder=" ..." />
        </div>
        <button type="submit">Gonder</button>
      </form>
    </section>
  );
};

export default becomeMemberWidget;
