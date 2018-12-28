import React, { Component } from "react";
import Link from "next/link";
import "../../public/styles/Main.scss";

const aboutUs = props => {
  return (
    <section className="about-us align-body">
      <h1>Emekliyim Mutluyum</h1>
      <p>
        Baba burada sirketi, etkinlikleri, falan filan millete anlatmak lazim,
        istersen resim falan da koyariz. Sen nasil istersen bu sayfayi
        sekillendiricez.
      </p>
      <h2>Bu oyle bir baslik iste, sus olsun diye</h2>
      <p>
        Compellingly exploit timely partnerships through progressive web
        services. Intrinsicly strategize 24/365 supply chains through orthogonal
        benefits. Enthusiastically network worldwide expertise with
        backward-compatible content. Competently incentivize installed base
        deliverables rather than cost effective portals. Assertively innovate
        scalable infomediaries and multifunctional resources.
      </p>
    </section>
  );
};

export default aboutUs;
