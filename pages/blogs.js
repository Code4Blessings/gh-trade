import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import Navbar from "../components/navbar/navbar";
import BlogSlider from "../components/blog-slider/blog-slider";
import Footer from "../components/footer/footer";

const home = props => {
  return (
    <section>
      <Head>
        <title>Emekliyim Mutluyum</title>
        <meta name="description" content="Emekliyim mutluyum aciklamasi" />
      </Head>
      <Navbar />
      <BlogSlider eventPage={true} blogs={dummyBlogs} />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </section>
  );
};

export default home;

var dummyBlogs = [
  {
    date: "02.11.2019 Pazartesi",
    title:
      "Emekliler ile alakali uyelerimiz tarafindan yazilan makalanin basligi",
    breif:
      "Yazilmis makalenin giris paragrafindan bir satir burada yer alacak, maksat okuyucunun konudan daha cok etkilenmesi ve daha iyi anlamasi",
    author: "Ali Kartal",
    url: "#"
  },
  {
    date: "12.04.2019 Carsamba",
    title:
      "Emekliler ile alakali uyelerimiz tarafindan yazilan makalanin basligi",
    breif:
      "Yazilmis makalenin giris paragrafindan bir satir burada yer alacak, maksat okuyucunun konudan daha cok etkilenmesi ve daha iyi anlamasi",
    author: "Nejla Akbal",
    url: "#"
  },
  {
    date: "11.04.2019 Cuma",
    title:
      "Emekliler ile alakali uyelerimiz tarafindan yazilan makalanin basligi",
    breif:
      "Yazilmis makalenin giris paragrafindan bir satir burada yer alacak, maksat okuyucunun konudan daha cok etkilenmesi ve daha iyi anlamasi",
    author: "Fatih Gulluoglu",
    url: "#"
  },
  {
    date: "02.11.2019 Pazartesi",
    title:
      "Emekliler ile alakali uyelerimiz tarafindan yazilan makalanin basligi",
    breif:
      "Yazilmis makalenin giris paragrafindan bir satir burada yer alacak, maksat okuyucunun konudan daha cok etkilenmesi ve daha iyi anlamasi",
    author: "Ali Kartal",
    url: "#"
  },
  {
    date: "12.04.2019 Carsamba",
    title:
      "Emekliler ile alakali uyelerimiz tarafindan yazilan makalanin basligi",
    breif:
      "Yazilmis makalenin giris paragrafindan bir satir burada yer alacak, maksat okuyucunun konudan daha cok etkilenmesi ve daha iyi anlamasi",
    author: "Nejla Akbal",
    url: "#"
  },
  {
    date: "11.04.2019 Cuma",
    title:
      "Emekliler ile alakali uyelerimiz tarafindan yazilan makalanin basligi",
    breif:
      "Yazilmis makalenin giris paragrafindan bir satir burada yer alacak, maksat okuyucunun konudan daha cok etkilenmesi ve daha iyi anlamasi",
    author: "Fatih Gulluoglu",
    url: "#"
  }
];
