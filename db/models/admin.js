"use strict";

const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const schema = mongoose.Schema;

const adminSchema = new schema({
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

adminSchema.methods.hashPassword = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(3));
};

adminSchema.methods.comparePassword = function(password, hash) {
  return bcrypt.compareSync(password, hash);
};

adminSchema.statics.authenticate = function(email, password, cb) {
  this.findOne({ email: email }, function(e, user) {
    if (e || !user) {
      return cb(null);
    }
    if (user) {
      return cb(user);
    }
    return cb(null);
  });
};

module.exports = mongoose.model("admins", adminSchema, "admins");
