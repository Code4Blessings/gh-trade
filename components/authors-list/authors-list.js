import React, { Component } from "react";
import Link from "next/link";
import "../../public/styles/Main.scss";

const authors = props => {
  return (
    <section className="authors align-body">
      <h1>Yazarlarimiz</h1>
      {insertArticleList(props.authors)}
    </section>
  );
};

//  Groups the articles written by same author
function sortArticles(authors) {
  const sortedAuthors = {};
  authors.forEach((author, i) => {
    const key = `'${author.author}'`;
    if (!sortedAuthors[key]) {
      sortedAuthors[key] = [[author.title, author.url]];
    } else {
      sortedAuthors[key].push([author.title, author.url]);
    }
  });
  return sortedAuthors;
}

function insertArticleList(authors) {
  const sortedAuthors = sortArticles(authors);

  const jsx = Object.keys(sortedAuthors).map((author, i) => {
    const articles = Object.values(sortedAuthors)[i];
    return (
      <div className="authors__author">
        <h4 className="authors__author-name">{author}</h4>
        {loopArticles(articles)}
      </div>
    );
  });
  return jsx;
}

function loopArticles(articles) {
  const jsx = articles.map(article => {
    const url = article[1];
    const title = article[0];
    const blogUrl = "/blog/" + url;
    return (
      <Link href={blogUrl}>
        <a className="authors__author-blog">{title}</a>
      </Link>
    );
  });
  return jsx;
}

export default authors;
