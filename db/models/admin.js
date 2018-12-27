"use strict";

const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const schema = mongoose.Schema;

const userSchema = new schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.methods.hashPassword = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(3));
};

userSchema.methods.comparePassword = function(password, hash) {
  return bcrypt.compareSync(password, hash);
};

userSchema.statics.authenticate = function(email, password, cb) {
  this.findOne({ email: email }, function(e, user) {
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

module.exports = mongoose.model("users", userSchema, "users");
