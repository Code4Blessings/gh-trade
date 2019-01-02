"use strict";

const mongoose = require("mongoose");

const BlogSuggestSchema = new mongoose.Schema({
  title: String,
  content: String,
  date: Date,
  member: Object
});

BlogSuggestSchema.statics.createNew = async function(body) {
  const newBlogSuggest = new BlogSuggest({
    title: body.title,
    content: body.content,
    member: body.member
  });
  const saveBlogSuggest = await newBlogSuggest.save();
  return saveBlogSuggest;
};

const BlogSuggest = mongoose.model("BlogSuggest", BlogSuggestSchema);

module.exports = BlogSuggest;
