import React, { Component } from "react";
import Link from "next/link";
import parseDate from "../../helpers/client/parse-date.js";
import "../../public/styles/Main.scss";

const event = props => {
  return (
    <section className="event-page align-body">
      <div className="date">{parseDate(props.event.date)}</div>
      <pre dangerouslySetInnerHTML={{ __html: props.event.html }} />
      <Link href="/events">
        <a className="red-link">Butun Etlinliklerimizi Goruntule</a>
      </Link>
    </section>
  );
};

export default event;
