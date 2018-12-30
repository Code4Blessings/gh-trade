import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import Navbar from "../components/navbar/navbar";
import BlogSlider from "../components/blog-slider/blog-slider";
import Footer from "../components/footer/footer";
import basePath from "../helpers/client/basePath.js";

class Blogs extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.fetchMoreBlogs = this.fetchMoreBlogs.bind(this);
    this.state = {
      ajaxFetchedBlogs: []
    };
  }

  render() {
    return (
      <section>
        <Head>
          <title>Emekliyim Mutluyum</title>
          <meta name="description" content="Emekliyim mutluyum aciklamasi" />
        </Head>
        <Navbar />
        <BlogSlider eventPage={true} blogs={this.props.blogs} />
        {this.state.ajaxFetchedBlogs.length && (
          <BlogSlider
            eventPage={true}
            noTitle={true}
            blogs={this.state.ajaxFetchedBlogs}
          />
        )}
        <a
          className="load-more-button red-link align-body"
          id="load-more-btn"
          onClick={this.fetchMoreBlogs}
        >
          Daha Fazla Goster
        </a>
        <br />
        <br />
        <Footer />
      </section>
    );
  }

  async fetchMoreBlogs() {
    const { data: blogs } = await axios.get("/api/fetch/blogs/load-more");

    // if all blogs already fetched
    if (!blogs.length) {
      // remove load more button
      document.getElementById("load-more-btn").style.visibility = "hidden";
    } else {
      // new blogs fetched, update state and triger rerender
      this.setState(state => ({
        ajaxFetchedBlogs: [...state.ajaxFetchedBlogs, ...blogs]
      }));
    }
  }

  static async getInitialProps({ req }) {
    if (req && req.session) {
      req.session.blogSkip = 12;
    }
    let _blogs = await fetch(`${basePath}/iso/fetch/blogspage/initial`);
    _blogs = await _blogs.json();

    return {
      blogs: _blogs.length ? _blogs : []
    };
  }
}

export default Blogs;
