import React, { Component } from "react";
import Link from "next/link";
import "../../public/styles/Main.scss";

class navbar extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      authenticedUser: false
    };
  }

  render() {
    return (
      <section className="navbar">
        <Link href="/">
          <a className="navbar-logo">
            <img
              src="/static/images/logo.jpg"
              alt="Emekliyim mutluyum anasayfa"
            />
          </a>
        </Link>
        <div className="navbar-burger" onClick={slideMenu}>
          <span className="top" />
          <span id="middle">menu</span>
          <span className="bottom" />
        </div>
        <section id="menu">
          <ul>
            {this.state.authenticedUser
              ? this.authenticedNav
              : this.anonymousNav}
            <li>
              <Link href="/events">
                <a className="activities">Etkinlikler</a>
              </Link>
            </li>
            <li>
              <Link href="/blogs">
                <a className="blogs">Makaleler</a>
              </Link>
            </li>
            <li>
              <Link href="/authors">
                <a className="authors">Yazarlarimiz</a>
              </Link>
            </li>
            <li>
              <Link href="/contact-us">
                <a className="contact">Bize ulasin</a>
              </Link>
            </li>
            <li>
              <Link href="about-us">
                <a className="about">Hakkimizda</a>
              </Link>
            </li>
          </ul>
        </section>
      </section>
    );
  }

  componentDidMount() {
    const isCurrentUser = JSON.parse(
      localStorage.getItem("authenticationStatus")
    );
    if (isCurrentUser) {
      this.setState({
        authenticedUser: true
      });
    }
  }

  get authenticedNav() {
    return (
      <li>
        <Link href="/login">
          <a className="member">Profiliniz</a>
        </Link>
      </li>
    );
  }

  get anonymousNav() {
    return [
      <li>
        <Link href="/register">
          <a className="member">Uye ol</a>
        </Link>
      </li>,
      <li>
        <Link href="/login">
          <a className="login">Giris yap</a>
        </Link>
      </li>
    ];
  }
}

function slideMenu() {
  document.getElementById("menu").classList.toggle("slide-navigation-menu");
  document.body.classList.toggle("no-scroll");
  document.getElementById("middle").classList.toggle("rotate-nav");
}

export default navbar;
