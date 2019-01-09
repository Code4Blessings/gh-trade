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
    this.server.get("/user/register", this.renderUserRegister.bind(this));
    this.server.get("/user/login", this.renderUserLogin.bind(this));
    this.server.get("/search/detailed", this.searchPage.bind(this));
    this.server.all("*", this.handleAll.bind(this));
  }

  /**
   *  Render views
   */
  renderHome(req, res) {
    this.app.render(req, res, "/index");
  }

  renderUserRegister(req, res) {
    this.app.render(req, res, "/user/register");
  }

  renderUserLogin(req, res) {
    this.app.render(req, res, "/user/login");
  }

  searchPage(req, res) {
    this.app.render(req, res, "/search");
  }

  handleAll(req, res) {
    return this.handle(req, res);
  }
}

module.exports = (server, app, handle) => {
  new NextRoutes(server, app, handle);
};
