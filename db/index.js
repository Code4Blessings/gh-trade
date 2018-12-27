"use strict";

const { DB_URI } = require("../config");
module.exports = require("mongoose").connect(DB_URI);
