"use strict";

const winston = require("winston");
const logger = new winston.Logger({
  transports: [
    new winston.transports.File({
      level: "debug",
      filename: "./appDebug.log",
      handleExceptions: true
    }),
    new winston.transports.Console({
      level: "debug",
      json: true,
      handleExceptions: true
    })
  ],
  exitOneError: false
});

module.exports = logger;
