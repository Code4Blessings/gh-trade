/**
 * Admin Authentication Routes
 *
 *       /auth/...
 */

"use strict";

const express = require("express");
const router = express.Router();
const User = require("../../../db/models/admin");

class AuthRouter {
  constructor(router) {
    this.router = router;
    this.registerRoutes();
  }

  registerRoutes() {
    this.router.get("/admin/login", this.adminLogin_get.bind(this));
    this.router.post("/admin/login", this.adminLogin_post.bind(this));
  }

  adminLogin_get(req, res) {
    res.render("admin-login.pug");
  }

  adminLogin_post(req, res) {
    User.authenticate(req.body.email, req.body.password, user => {
      if (user) {
        req.session.userId = user._id;
        return res.redirect("/admin/console");
      } else {
        res.render("admin-login.pug", {
          alert: "No match!"
        });
      }
    });
  }
}

new AuthRouter(router);

module.exports = router;
