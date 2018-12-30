import React, { Component } from "react";
import Link from "next/link";
import parseDate from "../../helpers/client/parse-date.js";
import "../../public/styles/Main.scss";

const blog = props => {
  console.log(props);
  return (
    <section className="blog-page align-body">
      <h1>{props.blog.blog_h1}</h1>
      <h2>{props.blog.blog_h2}</h2>
      <div className="date">{parseDate(props.blog.blog_date)}</div>
      <div className="author">{props.blog.author}</div>
      <pre dangerouslySetInnerHTML={{ __html: props.blog.blog_html }} />
      <Link href="/blogs">
        <a className="red-link">Butun Makalelerimizi Goruntule</a>
      </Link>
    </section>
  );
};

export default blog;
