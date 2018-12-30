/**
 *  Only handles isomorphic-unfetch initial props
 *
 *      /iso/...
 */

"use strict";

const express = require("express");
const router = express.Router();
const enableCors = require("cors");
const logger = require("../../logger");
const Blogs = require("../../db/models/blogs.js");
const AuthorList = require("../../db/models/blogList.js");

class IsomorphicRouter {
  constructor(router) {
    this.router = router;
    this.registerRoutes();
  }

  /**
   *  Routes
   */
  registerRoutes() {
    this.router.get("/fetch/homepage/initial", [
      enableCors(),
      this.fetchHomepageInitialBlogs.bind(this)
    ]);

    this.router.get("/fetch/blogspage/initial", [
      enableCors(),
      this.fetchBlogsPageInitialBlogs.bind(this)
    ]);
    this.router.get("/fetch/blog/:blogUrl", [
      enableCors(),
      this.fetchBlog.bind(this)
    ]);
    this.router.get("/fetch/authors-list", [
      enableCors(),
      this.fetchAuthorsList.bind(this)
    ]);
  }

  /**
   *  Database methods
   */
  fetchAuthorsList(req, res) {
    AuthorList.find()
      .then(list => {
        res.json(list);
      })
      .catch(e => {
        console.log(e);
        logger.log(
          "Error: Api > Fetch blog list db query - fetchBloglist() ",
          e
        );
        res.json({});
      });
  }

  fetchBlog(req, res) {
    Blogs.findOne({ blog_url: req.params.blogUrl })
      .then(blog => {
        res.json(blog);
      })
      .catch(e => {
        console.log(e);
        logger.log("Error: Api > Fetch single blog db query - fetchBlog() ", e);
        res.json({});
      });
  }

  fetchHomepageInitialBlogs(req, res) {
    Blogs.find()
      .sort({ date: -1 })
      .limit(6)
      .then(blogs => {
        if (!blogs.length) {
          res.json({});
        } else {
          res.json(blogs);
        }
      })
      .catch(e => {
        console.log(e);
        logger.log(
          "Error: Api > Fetch homepage blogs db query - fetchHomepageInitialBlogs() ",
          e
        );
      });
  }

  fetchBlogsPageInitialBlogs(req, res) {
    Blogs.find()
      .sort({ date: -1 })
      .limit(12)
      .then(blogs => {
        if (!blogs.length) {
          res.json({});
        } else {
          res.json(blogs);
        }
      })
      .catch(e => {
        console.log(e);
        logger.log(
          "Error: Api > Fetch blogs page db query - fetchBlogsPageInitialBlogs() ",
          e
        );
      });
  }
}

new IsomorphicRouter(router);

module.exports = router;
