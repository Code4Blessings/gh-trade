"use strict";

const express = require("express");
const next = require("next");
const compression = require("compression");
const { parse } = require("url");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const consolidate = require("consolidate");
const cookieParser = require("cookie-parser");
const session = require("../session");
const isomorphicRoutes = require("./routes/isomorphic.js");
const apiRoutes = require("./routes/api.js");
const adminRoutes = require("./routes/admin/");
const authRoutes = require("./routes/auth.js");

require("../db");

process.on("uncaughtException", function(err) {
  console.error("Uncaught Exception: ", err);
});
process.on("unhandledRejection", (reason, p) => {
  console.error("Unhandled Rejection: Promise:", p, "Reason:", reason);
});

process.env.NODE_ENV = process.env.NODE_ENV || "production";
process.env.PORT = process.env.PORT || 80;

(async function() {
  try {
    const nextApp = next({
      dir: ".",
      dev: process.env.NODE_ENV === "development"
    });
    const handle = nextApp.getRequestHandler();
    await nextApp.prepare();
    const server = express();
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(helmet());
    server.use(compression());
    server.use(cors());
    server.engine("pug", consolidate.pug);
    server.engine("ejs", consolidate.ejs);
    server.set("view engine", "pug");
    server.set("views", path.join(process.cwd(), "/views"));
    server.use(session);
    server.use(cookieParser());
    server.use((req, res, next) => {
      res.locals.currentUser = req.session.userId;
      res.locals.session = req.session;
      next();
    });
    server.use("/auth", authRoutes);
    server.use("/admin", adminRoutes);
    server.use("/api", apiRoutes);
    server.use("/iso", isomorphicRoutes);
    require("./routes/nextJS.js")(server, nextApp, handle);

    server.listen(3000, err => {
      if (err) {
        throw err;
      }
      console.log("Server is running");
    });
  } catch (e) {
    console.error(e.stack);
    process.exit(1);
  }
})();
