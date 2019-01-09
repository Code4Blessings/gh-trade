import React, { Component } from "react";
import Link from "next/link";
import "../../public/styles/Main.scss";

export default () => {
  return (
    <section className="user-register-form">
      <h2>Login</h2>
      <form className="default-form">
        <label for="email">Email</label>
        <input type="email" placeholder=" @" id="email" />
        <label for="password">Password</label>
        <input type="password" placeholder=" Password" id="password" />
        <button>Sign in</button>
      </form>
    </section>
  );
};
