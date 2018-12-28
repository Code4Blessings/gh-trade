import React, { Component } from "react";
import Link from "next/link";
import "../../public/styles/Main.scss";

const banner = props => {
  return (
    <section className="authors align-body">
      <h1>Yazarlarimiz</h1>
      {insertAuthors(props.authors)}
    </section>
  );
};

function insertAuthors(authors) {
  const jsx = authors.map(author => {
    return (
      <div className="authors__author">
        <h4 className="authors__author-name">{author.name}</h4>
        {insertAuthorBlogs(author.blogs)}
      </div>
    );
  });
  return jsx;
}

function insertAuthorBlogs(blogs) {
  const jsx = blogs.map(blog => {
    const blogUrl = "/blog/" + blog.url;
    return (
      <Link href={blogUrl}>
        <a className="authors__author-blog">{blog.title}</a>
      </Link>
    );
  });
  return jsx;
}

export default banner;
