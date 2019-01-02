"use strict";

const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const schema = mongoose.Schema;

const userSchema = new schema({
  name: String,
  phone: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  events_joined: Array, //[urlString1, urlString2, ...]
  blogs_suggested: Array // [[id, date, title, content, status], [id, date, title, content, status], ...]
});

userSchema.methods.hashPassword = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(3));
};

userSchema.methods.comparePassword = function(password, hash) {
  return bcrypt.compareSync(password, hash);
};

userSchema.statics.authenticate = function(phone, password, cb) {
  this.findOne({ phone: phone }, function(e, user) {
    if (e || !user) {
      return cb(null);
    }
    const valid = user.comparePassword(password, user.password);
    if (valid) {
      return cb(user);
    }
    return cb(null);
  });
};

userSchema.statics.createNew = function(reqBody) {
  const newUser = new User({
    name: reqBody.name,
    phone: reqBody.number
  });
  newUser.password = newUser.hashPassword(reqBody.password);
  return newUser.save();
};

/**
 * save user suggested blog to user's record (can view on profile page which blogs suggested and which blogs confirmed by admin)
 */
userSchema.statics.saveSuggestedBlog = function(suggestedBlogID, body, cb) {
  this.findById(body.member._id, function(e, user) {
    if (e || !user) {
      return cb(e, null);
    }
    // we create the object key with the same id so easier to find and update in future
    user.blogs_suggested.push([
      suggestedBlogID,
      Date.now(),
      body.title,
      body.content,
      false
    ]);
    user.save((e, updatedUser) => {
      cb(e, updatedUser);
    });
  });
};

const User = mongoose.model("user", userSchema);

module.exports = User;