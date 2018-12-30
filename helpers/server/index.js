"use strict";

const crypto = require("crypto");
const fs = require("fs");
const util = require("util");
const logger = require("../../logger");
const FsCreateDirectory = util.promisify(fs.mkdir);

const utils = {
  // middleware creates unique file folder (for each application)
  createDirectory: (absolutePath, cb) => {
    const uniqueDirectory =
      new Date().toISOString().split("T")[0] +
      "___" +
      crypto.randomBytes(3).toString("hex");
    const directory = absolutePath + uniqueDirectory + "/";
    FsCreateDirectory(directory)
      .then(() => {
        return cb(directory);
      })
      .catch(e => {
        console.log(e);
        logger.log(
          "Error: Fs can NOT create directory. helpers.createDirectory ",
          e
        );
      });
  }
};

module.exports = utils;
