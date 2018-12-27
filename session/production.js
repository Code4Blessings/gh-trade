"use strict";

const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const config = require("../config");
const db = require("../db");
const hour = 3600000;

module.exports = session({
  secret: config.SESSION_SECRET,
  resave: false,
  cookie: { maxAge: hour * 2 },
  saveUninitialized: true,
  store: new MongoStore({
    mongooseConnection: db.Mongoose.connection
  })
});
