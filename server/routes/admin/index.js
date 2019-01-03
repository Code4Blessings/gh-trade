/**
 *   Admin routes
 *
 *        /admin/...
 */

"use strict";

const express = require("express");
const router = express.Router();
const logger = require("../../../logger");


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
  }

  /**
   * Views
   */
  renderAdminConsole(req, res) {
    res.render("admin-console.pug");
  }
  /**
   * Middlewares
   */

  requiresLogin(req, res, next) {
    return req.session && req.session.userId
      ? next()
      : res.redirect("/auth/admin/login");
  }

  /**
   *  Database methods
   */
}

new AdminRouter(router);

module.exports = router;
