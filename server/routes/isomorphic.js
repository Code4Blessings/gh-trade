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

class IsomorphicRouter {
  constructor(router) {
    this.router = router;
    this.registerRoutes();
  }

  /**
   *  Routes
   */
  registerRoutes() {
    this.router.get("/fetch/homepage/recents", [
      enableCors(),
      this.fetchHomepageRecentBlogs.bind(this)
    ]);
  }

  /**
   *  Database methods
   */
  fetchHomepageRecentBlogs(req, res) {
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
          "Error: Api > Fetch recent blogs db query - fetchHomepageRecentBlogs() ",
          e
        );
      });
  }
}

new IsomorphicRouter(router);

module.exports = router;
