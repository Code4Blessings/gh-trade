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

class IsomorphicRouter {
  constructor(router) {
    this.router = router;
    this.registerRoutes();
  }

  /**
   *  Routes
   */
  registerRoutes() {

  }

  /**
   *  Database methods
   */
}

new IsomorphicRouter(router);

module.exports = router;
