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
const logger = require("../../../logger");

class AdminRouter {
  constructor(router) {
    this.router = router;
    this.registerRoutes();
  }

  /**
   * Routes
   */
  registerRoutes() {}
}

new AdminRouter(router);

module.exports = router;
