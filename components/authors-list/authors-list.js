import React, { Component } from "react";
import Link from "next/link";
import "../../public/styles/Main.scss";

const authors = props => {
  console.log();
  return (
    <section className="authors align-body">
      <h1>Yazarlarimiz</h1>
      {insertAuthors(props.authors)}
    </section>
  );
};

function insertAuthors(authors) {
  const jsx = authors.map(author => {
    const blogUrl = "/blog/" + author.url;
    return (
      <div className="authors__author">
        <h4 className="authors__author-name">{author.author}</h4>
        <Link href={blogUrl}>
          <a className="authors__author-blog">{author.title}</a>
        </Link>
      </div>
    );
  });
  return jsx;
}

export default authors;
