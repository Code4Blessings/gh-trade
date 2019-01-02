import React, { Component } from "react";
import Link from "next/link";
import parseDate from "../../helpers/client/parse-date.js";
import "../../public/styles/Main.scss";
import SocialMediaShare from "../social-media-share/social-media-share.js";
import EventSlider from "../event-slider/event-slider.js";
const blog = props => {
  return (
    <section className="blog-page align-body">
      <div className="blog-page__blog">
        <h1>{props.blog.blog_h1}</h1>
        <h2>{props.blog.blog_h2}</h2>
        <div className="date">{parseDate(props.blog.blog_date)}</div>
        <div className="author">{props.blog.author}</div>
        <pre dangerouslySetInnerHTML={{ __html: props.blog.blog_html }} />
        <SocialMediaShare />
        <br />
        <br />
        <Link href="/blogs">
          <a className="red-link">Butun Makalelerimizi Goruntule</a>
        </Link>
      </div>
      <div className="blog-page__sidebar">
        <EventSlider events={props.events} forSideBar={true} />
      </div>
    </section>
  );
};

export default blog;
