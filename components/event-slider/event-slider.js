import React, { Component } from "react";
import Link from "next/link";
import ThumbnailEvent from "../event-thumbnail/event-thumbnail";
import "../../public/styles/Main.scss";

const dummyEvents = [
  {
    date: "02.11.2019 Pazartesi",
    title: "Bilardo sevenler icin ankara dikmende emekli bilardo turnuvasi",
    location: "Kecioren - Ankara",
    img:
      "https://www.globalmaritimeforum.org/content/2018/03/Global-Maritme-Forum_Port_Trade-350x210.jpeg",
    url: "#"
  },
  {
    date: "12.04.2019 Carsamba",
    title: "Bilardo sevenler icin ankara dikmende emekli bilardo turnuvasi",
    location: "Dikmen - Ankara",
    img:
      "https://www.globalmaritimeforum.org/content/2018/03/Dr-Grahaeme-Henderson-1-350x210.jpg",
    url: "#"
  },
  {
    date: "11.04.2019 Cuma",
    title: "Bilardo sevenler icin ankara dikmende emekli bilardo turnuvasi",
    location: "Cankaya - Ankara",
    img:
      "https://www.globalmaritimeforum.org/content/2018/04/Global-Maritime-Forum_zero-emission-350x210.jpg",
    url: "#"
  }
];

const eventSlider = props => {
  return (
    <section className="eventslider align-body">
      <h1>Yakında olan etkinlikler</h1>
      <div className="eventslider__frame">
        {insertThumbnailEvents(dummyEvents)}
      </div>
      <Link href="#">
        <a className="red-link">Butun Etkinliklerimiz</a>
      </Link>
    </section>
  );
};

function insertThumbnailEvents(events) {
  const jsx = events.map(event => {
    return <ThumbnailEvent event={event} />;
  });
  return jsx;
}

export default eventSlider;
