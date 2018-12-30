import React, { Component } from "react";
import Link from "next/link";
import parseDate from "../../helpers/client/parse-date.js";
import "../../public/styles/Main.scss";

const blogThumbnail = props => {
  const imgPath = `/static/images/blog-images/${props.blog.image_directory}/${
    props.blog.blog_thumbnail_img
  }`;
  const blogLink = `/blog/${props.blog.blog_url}`;
  return (
    <article className="blog-thumbnail">
      <Link href={blogLink}>
        <a>
          <img src={imgPath} alt="Emekliyim mutluyum emelilik makalesi" />
          <h2>{props.blog.seo_title}</h2>
          <p>{props.blog.seo_description}</p>
          <div className="date">{parseDate(props.blog.blog_date)}</div>
          <div className="author">{props.blog.author}</div>
        </a>
      </Link>
    </article>
  );
};

export default blogThumbnail;
