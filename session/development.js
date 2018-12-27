"use strict";

const session = require("express-session");
const config = require("../config");
const hour = 3600000;

module.exports = session({
  secret: config.SESSION_SECRET,
  cookie: { maxAge: hour * 2 },
  resave: false,
  saveUninitialized: true
});
