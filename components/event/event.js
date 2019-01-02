import React, { Component } from "react";
import Link from "next/link";
import parseDate from "../../helpers/client/parse-date.js";
import "../../public/styles/Main.scss";
import SocialMediaShare from "../social-media-share/social-media-share.js";

const event = props => {
  return (
    <div className="align-body">
      <section className="event-page">
        <div className="event-page__info">
          <h1>{props.event.seo_title}</h1>
          <h2>{props.event.seo_description}</h2>
          <pre dangerouslySetInnerHTML={{ __html: props.event.html }} />
        </div>
        <div className="event-page__data">
          <div className="event-page__data-flex">
            <span className="joined">Katilan Kisi Sayisi</span>
            <div>
              <b>{props.event.joined_qty}</b>
            </div>
          </div>
          <div className="event-page__data-flex">
            <span className="date">Tarih</span>
            <div>{parseDate(props.event.date)}</div>
          </div>
          <div className="event-page__data-flex">
            <span className="time">Saat</span>
            <div>{props.event.time}</div>
          </div>
          <div className="event-page__data-flex">
            <span className="duration">Süre</span>
            <div>{props.event.duration}</div>
          </div>
          <div className="event-page__data-flex">
            <span className="city">Adres</span>
            <div>{props.event.city}</div>
          </div>
          <div className="event-page__data-flex">
            <span className="capacity">Azami Kisi Sayisi</span>
            <div>{props.event.max_capacity}</div>
          </div>
          <div className="event-page__data-flex">
            <button className="swing join-button red-link">SENDE KATIL</button>
          </div>
          <div className="event-page__data-social-wrap">
            <SocialMediaShare />
          </div>
          <br />
          <br />
        </div>
      </section>
      <Link href="/events">
        <a className="red-link event-page-bottom">Butun Etkinliklerimiz</a>
      </Link>
      <br />
      <br />
      <br />
    </div>
  );
};

export default event;
