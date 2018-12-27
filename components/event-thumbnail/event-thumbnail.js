import React, { Component } from "react";
import Link from "next/link";
import "../../public/styles/Main.scss";

const eventThumbnail = props => {
  return (
    <section className="event-thumbnail">
      <Link href={props.event.url}>
        <a>
          <img src={props.event.img} />
          <div className="date">{props.event.date}</div>
          <h2>{props.event.title}</h2>
          <div className="location">{props.event.location}</div>
        </a>
      </Link>
    </section>
  );
};

export default eventThumbnail;
