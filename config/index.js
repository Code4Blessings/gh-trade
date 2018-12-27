"use strict";

module.exports =
  process.env.NODE_ENV === "production"
    ? require("./production.js")
    : require("./development.js");
