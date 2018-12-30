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
  }

  /**
   * Handlers
   */

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
}

new ApiRouter(router);

module.exports = router;
