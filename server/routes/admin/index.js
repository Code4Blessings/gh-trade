/**
 *   Admin routes
 *
 *        /admin/...
 */

"use strict";

const express = require("express");
const router = express.Router();
const url = require("url");
const path = require("path");
const mime = require("mime");
const fs = require("fs");
const multer = require("multer");
const crypto = require("crypto");
const helpers = require("../../../helpers/server/index.js");
const logger = require("../../../logger");
const Blog = require("../../../db/models/blogs.js");
const Event = require("../../../db/models/events.js");

class AdminRouter {
  constructor(router) {
    this.router = router;
    this.registerRoutes();
  }

  /**
   * Routes
   */
  registerRoutes() {
    this.router.get("/console", [this.requiresLogin, this.renderAdminConsole]);
    this.router.get("/add-blog", [this.requiresLogin, this.renderAddBlogPage]);
    this.router.get("/add-event", [
      this.requiresLogin,
      this.renderAddEventPage
    ]);
    this.router.post("/add-blog", [
      this.createImageDirectory.bind(this),
      this.handleImages().any(),
      this.addBlog.bind(this)
    ]);
    this.router.post("/add-event", [
      this.setEventDirectory.bind(this),
      this.handleImages().any(),
      this.addEvent.bind(this)
    ]);
  }

  /**
   * Views
   */
  renderAdminConsole(req, res) {
    res.render("admin-console.pug");
  }
  renderAddBlogPage(req, res) {
    res.render("add-blog.ejs");
  }
  renderAddEventPage(req, res) {
    res.render("add-event.ejs");
  }

  /**
   * Middlewares
   */
  createImageDirectory(req, res, next) {
    helpers.createDirectory("./static/images/blog-images/", directory => {
      req.session.directory = directory;
      next();
    });
  }

  setEventDirectory(req, res, next) {
    req.session.directory = "./static/images/event-images/";
    next();
  }

  handleImages(req, res) {
    const storage = multer.diskStorage({
      destination: function(req, file, cb) {
        cb(null, req.session.directory);
      },
      filename: function(req, file, cb) {
        const imageName =
          crypto.randomBytes(6).toString("hex") +
          path.extname(file.originalname);
        req.session.filename && req.session.filename.length
          ? req.session.filename.push(imageName)
          : (req.session.filename = [imageName]);
        cb(null, imageName);
      }
    });

    const startImageUpload = multer({
      storage: storage,
      limits: { fileSize: 10000000 },
      fileFilter: function(req, file, cb) {
        const accepted = /jpeg|jpg|png|gif/;
        const extname = accepted.test(
          path.extname(file.originalname).toLowerCase()
        );
        const mimetype = accepted.test(file.mimetype);
        return mimetype && extname
          ? cb(null, true)
          : cb("Error: Accepted image extentions are: .jpeg .jpg .png .gif");
      }
    });
    return startImageUpload;
  }

  requiresLogin(req, res, next) {
    return req.session && req.session.userId
      ? next()
      : res.redirect("/auth/admin/login");
  }

  /**
   *  Database methods
   */
  addBlog(req, res) {
    // tidy up image directory before saving blog
    req.body.uniqueDirectory = req.session.directory
      .replace("./static/images/blog-images/", "")
      .slice(0, -1);

    Blog.createNewAndAddToBlogList(req).catch(e => {
      logger.log("Error: Can NOT save blog. createNewAndAddToBlogList ", e);
      console.log(e);
    });

    // clear off image names from session
    req.session.filename = false;
    res.status(204).send();
  }

  addEvent(req, res) {
    Event.createNewEvent(req).catch(e => {
      logger.log("Error: Can NOT save blog. createNewAndAddToBlogList ", e);
      console.log(e);
    });

    // clear off image names from session
    req.session.filename = false;
    res.status(204).send();
  }
}

new AdminRouter(router);

module.exports = router;
