/**
 *  ApiRouter handles ajax requests and redirects
 *
 *      /api/...
 */

"use strict";

const express = require("express");
const router = express.Router();
const enableCors = require("cors");
const User = require("../../db/models/user");
const logger = require("../../logger");
const Blogs = require("../../db/models/blogs.js");
const BlogSuggest = require("../../db/models/blogSuggest.js");

class ApiRouter {
  constructor(router) {
    this.router = router;
    this.registerRoutes();
  }

  /**
   * Routes
   */
  registerRoutes() {
    this.router.post("/register/form", this.registerNewMember.bind(this));
    this.router.post("/user/login", this.userLogin.bind(this));
    this.router.get("/user/logout", this.userLogout.bind(this));
    this.router.get(
      "/fetch/blogs/load-more",
      this.fetchLoadMoreBlogs.bind(this)
    );
    this.router.post("/user/blog/suggest", this.userBlogSuggest.bind(this));
  }

  /**
   * Handlers
   */
  async userBlogSuggest(req, res) {
    try {
      // save suggested blog to db
      const suggestedBlogCreated = await BlogSuggest.createNew(req.body);
      // save suggested blog to user's record
      User.saveSuggestedBlog(
        suggestedBlogCreated._id,
        req.body,
        (e, result) => {
          if (e || !result) {
            console.log(e);
            logger.log(
              "Error: Api > saving blogs suggession to user record db save method userBlogSuggest()",
              e
            );
            res.json({});
          } else {
            res.json(result);
          }
        }
      );
    } catch (e) {
      console.log(e);
      logger.log(
        "Error: Api > Creating blogs suggession db save method query userBlogSuggest()",
        e
      );
    }
  }

  userLogout(req, res) {
    if (req.session) {
      req.session.destroy();
    }
  }

  userLogin(req, res) {
    User.authenticate(req.body.number, req.body.password, user => {
      if (user) {
        req.session.userID = user._id;
        res.json(user);
      } else {
        res.json({ user: false });
      }
    });
  }

  registerNewMember(req, res) {
    User.createNew(req.body)
      .then(user => {
        // making sure new user saved
        if (user) {
          res.json({ saved: true });
        } else {
          res.json({ saved: false });
        }
      })
      .catch(e => {
        // if dublicate user (same mob phone number)
        if (e.code == 11000) {
          res.json({ dublicate: true });
        } else {
          console.log(e); /* silence on production */
          res.json({ saved: false });
        }
      });
  }

  fetchLoadMoreBlogs(req, res) {
    const blogQty = 6;
    const sort = { date: -1 };
    const skipQty = req.session.blogSkip; // initially 12

    Blogs.fetchThumbnails(blogQty, skipQty, sort)
      .then(blogs => {
        if (!blogs.length) {
          // reset pagination index
          req.session.blogSkip = 12;
          res.json({});
        } else {
          req.session.blogSkip += 6;
          res.json(blogs);
        }
      })
      .catch(e => {
        console.log(e);
        logger.log("Error: Api > Fetch blogs page load more db query", e);
      });
  }
}

new ApiRouter(router);

module.exports = router;
