import React, { Component } from "react";
import Link from "next/link";
import "../../public/styles/Main.scss";
import { Picture } from "react-responsive-picture";

const bannerImages = [
  {
    srcSet: "/static/images/banner-small.jpg",
    media: "(max-width: 455px)"
  },
  {
    srcSet: "/static/images/banner-medium.jpg",
    media: "(max-width: 680px)"
  },
  {
    srcSet: "/static/images/banner-large.jpg",
    type: "image/jpg"
  }
];

const banner = props => {
  return (
    <section className="banner align-body">
      <div className="banner-image">
        <Picture
          sources={bannerImages}
          style={{ width: "100%" }}
          alt="Emekliyim mutluyum"
        />
        <Link href="#">
          <a className="banner-button">Etkinliklerimiz</a>
        </Link>
      </div>
      <div className="banner-content">
        <h1>Emekli oldugunuz kadar mutlu olmayida hak ediyorsunuz</h1>
        <p>
          Biz Emekliyim ve mutluyum olarak sizlerin mutlulugunuz ve
          eglencelerinizi organize etmekden gurur duyuyoruz, falan filan. Baba
          buralarin yazisini ayarla iste bana. Yazi ve resimleri istedigin gibi
          degistiricem. Ben 2 gune bir bu siteyi yenilerim, yaptiklarimi sende
          gorursun. Beraber yapa yapa bitirelim 2 haftaya en gec! Sonra aklimda
          super fikirler var reklam icin!
        </p>
        <Link href="#">
          <a className="banner-content-link">Biz Kimiz</a>
        </Link>
      </div>
    </section>
  );
};

export default banner;
