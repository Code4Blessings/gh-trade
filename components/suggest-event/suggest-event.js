import React, { Component } from "react";
import Link from "next/link";
import "../../public/styles/Main.scss";

class SuggestEvent extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <section className="suggest-blog">
        <h2>Bize emeklilere yonelik, etkinlik/toplanti/eglence oner!</h2>
        <p>
          Sizing arzu ettiginiz etkinlikleri duzenlememiz icin bizlere firsat
          verin. (BABA buranin yazisina sen ayar verirsin iste!)
        </p>
        <form
          className="form-default"
          method="post"
          action="/user/event/suggest"
        >
          <label>*Etkinlik detaylari</label>
          <textarea placeholder=" Makale..." />
          <button type="submit">Oneride bulun</button>
        </form>
      </section>
    );
  }
}

export default SuggestEvent;
