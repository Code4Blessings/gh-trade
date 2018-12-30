"use strict";

const mongoose = require("mongoose");

const BlogListSchema = new mongoose.Schema({
  blog: Array
});

const BlogList = mongoose.model("BlogList", BlogListSchema);

BlogList.findOne((e, doc) => {
  if (doc === null) {
    const blogsList = new BlogList();
    blogsList.save((e, saved) => {
      if (e) logger.log("error", e);
    });
  }
});

module.exports = BlogList;
