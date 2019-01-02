import React, { Component } from "react";
import Link from "next/link";
import ThumbnailEvent from "../event-thumbnail/event-thumbnail";
import "../../public/styles/Main.scss";

const eventSlider = props => {
  const cssClass = props.forSideBar
    ? "eventslider side-bar-events"
    : "eventslider align-body";
  return (
    <section className={cssClass}>
      {!props.forSideBar && (
        <h1>{props.eventPage ? "Etkinlikler" : "Yakında olan etkinlikler"}</h1>
      )}
      <div className="eventslider__frame">
        {insertThumbnailEvents(props.events)}
      </div>
      {!props.eventPage && (
        <Link href="/events">
          <a className="red-link">Butun Etkinliklerimiz</a>
        </Link>
      )}
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
