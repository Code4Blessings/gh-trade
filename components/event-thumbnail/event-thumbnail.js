import React, { Component } from "react";
import Link from "next/link";
import "../../public/styles/Main.scss";
import parseDate from "../../helpers/client/parse-date.js";

const eventThumbnail = props => {
  const imgPath = `/static/images/event-images/${props.event.thumbnail_img}`;
  const eventUrl = `/event/${props.event.url}`;
  return (
    <section className="event-thumbnail">
      <Link href={eventUrl}>
        <a>
          <div className="event-thumbnail-flex">
            <div className="date">{parseDate(props.event.date)}</div>
            <div className="time">{props.event.time}</div>
          </div>
          <img
            src={imgPath}
            alt="Emekliler icin Etlinlikler, Toplantilar, Eglenceler"
          />
          <h2>{props.event.seo_title}</h2>
          <p className="intro">
            {props.event.seo_description}
            ...
          </p>
          <div className="event-thumbnail-flex">
            <div className="location">{props.event.city}</div>
            <div className="joined">{props.event.joined_qty}</div>
          </div>
        </a>
      </Link>
    </section>
  );
};

export default eventThumbnail;
