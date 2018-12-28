import React, { Component } from "react";
import Link from "next/link";
import "../../public/styles/Main.scss";

const blogThumbnail = props => {
  return (
    <article className="blog-thumbnail">
      <Link href={props.blog.url}>
        <a>
          <div className="date">{props.blog.date}</div>
          <div className="author">{props.blog.author}</div>
          <h2>{props.blog.title}</h2>
          <p>{props.blog.breif}</p>
        </a>
      </Link>
    </article>
  );
};

export default blogThumbnail;
