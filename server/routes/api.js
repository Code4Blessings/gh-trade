/**
 *  ApiRouter handles ajax requests and redirects
 *
 *      /api/...
 */

"use strict";

const express = require("express");
const router = express.Router();
const enableCors = require("cors");
const logger = require("../../logger");

class ApiRouter {
  constructor(router) {
    this.router = router;
    this.registerRoutes();
  }

  /**
   * Routes
   */
  registerRoutes() {}
}

new ApiRouter(router);

module.exports = router;
