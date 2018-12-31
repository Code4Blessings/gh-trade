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
const Events = require("../../db/models/events.js");
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
    this.router.get("/fetch/homepage/initial/blogs", [
      enableCors(),
      this.fetchHomepageInitialBlogs.bind(this)
    ]);
    this.router.get("/fetch/homepage/initial/events", [
      enableCors(),
      this.fetchHomepageInitialEvents.bind(this)
    ]);
    this.router.get("/fetch/blogspage/initial", [
      enableCors(),
      this.fetchBlogsPageInitialBlogs.bind(this)
    ]);
    this.router.get("/fetch/eventspage/initial", [
      enableCors(),
      this.fetchEventsPageInitialBlogs.bind(this)
    ]);
    this.router.get("/fetch/blog/:blogUrl", [
      enableCors(),
      this.fetchBlog.bind(this)
    ]);
    this.router.get("/fetch/event/:eventUrl", [
      enableCors(),
      this.fetchEvent.bind(this)
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

  fetchEvent(req, res) {
    Events.findOne({ url: req.params.eventUrl })
      .then(event => {
        res.json(event);
      })
      .catch(e => {
        console.log(e);
        logger.log(
          "Error: Api > Fetch single event db query - fetchEvent() ",
          e
        );
        res.json({});
      });
  }

  fetchHomepageInitialEvents(req, res) {
    Events.find()
      .sort({ date: 1 })
      .limit(3)
      .then(events => {
        if (!events.length) {
          res.json({});
        } else {
          res.json(events);
        }
      })
      .catch(e => {
        console.log(e);
        logger.log(
          "Error: Api > Fetch homepage events db query - fetchHomepageInitialEvents() ",
          e
        );
      });
  }

  fetchHomepageInitialBlogs(req, res) {
    Blogs.find()
      .sort({ date: -1 })
      .limit(4)
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

  fetchEventsPageInitialBlogs(req, res) {
    Events.find()
      .sort({ date: 1 })
      .then(events => {
        if (!events.length) {
          res.json({});
        } else {
          res.json(events);
        }
      })
      .catch(e => {
        console.log(e);
        logger.log(
          "Error: Api > Fetch events page db query - fetchEventsPageInitialBlogs() ",
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
