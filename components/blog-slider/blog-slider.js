import React, { Component } from "react";
import Link from "next/link";
import BlogThumbnail from "../blog-thumbnail/blog-thumbnail";
import "../../public/styles/Main.scss";

const blogSlider = props => {
  const removeMarginTopForLoadedBlogs = props.noTitle
    ? { "margin-top": "0px" }
    : {};
  return (
    <section
      className="blog-slider align-body"
      style={removeMarginTopForLoadedBlogs}
    >
      {!props.noTitle && <h1>Uyelerimizin Yazdigi Makaleler</h1>}
      <div className="blog-slider__cell">
        {insertBlogThumbnails(props.blogs)}
      </div>

      {!props.eventPage && (
        <Link href="/blogs">
          <a className="red-link">Butun Makaleler</a>
        </Link>
      )}
    </section>
  );
};

function insertBlogThumbnails(blogs) {
  const jsx = blogs.map(blog => {
    return <BlogThumbnail blog={blog} />;
  });
  return jsx;
}

export default blogSlider;
