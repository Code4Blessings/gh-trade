"use strict";

const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const schema = mongoose.Schema;

const userSchema = new schema({
  phone: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  name: String,
  birth_day: Date,
  city: String,
  photo: {
    type: String,
    default: "/static/images/icons/avatar.png"
  },
  events_joined: Array, //[urlString1, urlString2, ...]
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
    city: reqBody.city,
    name: reqBody.name,
    phone: reqBody.number
  });
  newUser.password = newUser.hashPassword(reqBody.password);
  return newUser.save();
};

const User = mongoose.model("user", userSchema);

module.exports = User;
