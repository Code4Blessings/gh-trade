"use strict";

const logger = require("../../logger");

class NextRoutes {
  constructor(server, app, handle) {
    this.server = server;
    this.app = app;
    this.handle = handle;
    this.registerRoutes();
  }

  /**
   *  Routes
   */
  registerRoutes() {
    this.server.get("/", this.renderHome.bind(this));
    this.server.get("/register", this.renderRegister.bind(this));
    this.server.get("/login", this.renderLoginOrProfile.bind(this));
    this.server.get("/events", this.renderEvents.bind(this));
    this.server.get("/blogs", this.renderBlogs.bind(this));
    this.server.get("/authors", this.renderAuthors.bind(this));
    this.server.get("/blog/:id", this.renderBlog.bind(this));
    this.server.get("/contact-us", this.renderContactus.bind(this));
    this.server.get("/about-us", this.renderAboutus.bind(this));
    this.server.all("*", this.handleAll.bind(this));
  }

  /**
   *  Render views
   */
  renderHome(req, res) {
    this.app.render(req, res, "/index");
  }

  renderRegister(req, res) {
    this.app.render(req, res, "/register");
  }

  renderLoginOrProfile(req, res) {
    this.app.render(req, res, "/login_and_profile");
  }

  renderEvents(req, res) {
    this.app.render(req, res, "/events");
  }

  renderBlogs(req, res) {
    this.app.render(req, res, "/blogs");
  }

  renderAuthors(req, res) {
    this.app.render(req, res, "/authors");
  }

  renderContactus(req, res) {
    this.app.render(req, res, "/contact-us");
  }

  renderAboutus(req, res) {
    this.app.render(req, res, "/about-us");
  }

  renderBlog(req, res) {
    const queryParams = { id: req.params.id };
    this.app.render(req, res, "/blog", queryParams);
  }

  handleAll(req, res) {
    return this.handle(req, res);
  }
}

module.exports = (server, app, handle) => {
  new NextRoutes(server, app, handle);
};
