import React, { Component } from "react";
import Link from "next/link";
import "../../public/styles/Main.scss";

export default () => {
  return (
    <section className="user-register-form">
      <h2>Register</h2>
      <form className="default-form">
        <label for="name">Full name</label>
        <input type="text" placeholder=" Name" id="name" />
        <label for="email">Email</label>
        <input type="email" placeholder=" @" id="email" />
        <label for="password">Password</label>
        <input type="password" placeholder=" Password" id="password" />
        <label for="passwordRepeat">Password confirm</label>
        <input
          type="password"
          placeholder=" Confirm password"
          id="passwordRepeat"
        />
        <button>Sign up!</button>
      </form>
    </section>
  );
};
