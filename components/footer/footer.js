import React, { Component } from "react";
import Link from "next/link";
import "../../public/styles/Main.scss";

const facebook = "/static/images/icons/facebook.svg";
const twitter = "/static/images/icons/twitter.svg";
const instagram = "/static/images/icons/instagram.svg";

const footer = props => {
  return (
    <section className="footer align-body">
      <div className="footer-info">
        <h5>Bize Ulasin</h5>
        <div className="phone">+90 0312 344 43 40</div>
        <div className="email">info@emekliyim-mutluyum.com</div>
        <h5>Takip Edin</h5>
        <div className="socials">
          <a href="#">
            <img src={facebook} alt="facebook" className="facebook" />
          </a>
          <a href="#">
            <img src={twitter} alt="twitter" className="twitter" />
          </a>
          <a href="instagram">
            <img src={instagram} alt="instagram" className="instagram" />
          </a>
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-links-cell">
          <h5>Biz Kimiz</h5>
          <Link href="#">
            <a>Bizim ile alakali</a>
          </Link>
          <Link href="#">
            <a>Ekibimiz</a>
          </Link>
        </div>
        <div className="footer-links-cell">
          <h5>Yazilarimiz</h5>
          <Link href="#">
            <a>Makaleler</a>
          </Link>
          <Link href="#">
            <a>Yazarlarimiz</a>
          </Link>
        </div>
        <div className="footer-links-cell">
          <h5>Etkinlinler</h5>
          <Link href="#">
            <a>Etkinlik listemiz</a>
          </Link>
          <Link href="#">
            <a>Yakin zamandaki etkinlikler</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default footer;
