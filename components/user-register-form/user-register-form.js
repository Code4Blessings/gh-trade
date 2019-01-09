/**
 * Can NOT be class based component!
 * Due to being passed to another functional component (animated-form) as props
 * Ref:  /pages/user/register.js
 *
 *   Keep it as functional component!
 *   react-google-recaptcha or react-recaptcha cannot be integrated to functional components!
 */

import React, { Component } from "react";
import Link from "next/link";
import "../../public/styles/Main.scss";
import popup from "../../helpers/client/popup.js";

export default () => {
  return (
    <section className="user-register-form">
      <h2>Register</h2>
      <form className="default-form" onSubmit={handleSubmit}>
        <label for="name">Full name</label>
        <input
          type="text"
          placeholder=" Name"
          id="name"
          name="name"
          minLength="3"
        />
        <label for="email">Email</label>
        <input
          type="email"
          placeholder=" @"
          id="email"
          name="email"
          minLength="8"
        />
        <label for="password">Password</label>
        <input
          type="password"
          placeholder=" Password"
          id="password"
          name="password"
          minLength="8"
        />
        <label for="passwordRepeat">Password confirm</label>
        <input
          type="password"
          minLength="8"
          placeholder=" Confirm password"
          id="passwordRepeat"
          name="passwordRepeat"
        />
        <div class="customRecaptha">
          <div
            className="g-recaptcha"
            data-sitekey="6LceFoMUAAAAANS89MN_ERr8EU60f-OUJmnYMv2P"
          />
        </div>
        <button type="submit">Sign up!</button>
      </form>
    </section>
  );
};

function handleSubmit(e) {
  e.preventDefault();

  const { name, email, password, passwordRepeat } = e.target.elements;
  const notRobot = grecaptcha.getResponse().length === 0;
  const inputValues =
    name.value.length &&
    email.value.length &&
    password.value.length &&
    passwordRepeat.value.length;
  const passwordMatch = password.value === passwordRepeat.value;

  if (notRobot) {
    popup("Please tick the I am not robot box!", 5000);
  } else {
    if (!inputValues) {
      pupup("Please fill required form fields", 5000);
    } else if (!passwordMatch) {
      popup("Password do NOT match!", 5000);
    } else {
      e.target.submit();
    }
  }
}
