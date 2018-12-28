import React, { Component } from "react";
import Link from "next/link";
import "../../public/styles/Main.scss";

const registerForm = props => {
  return (
    <section className="register-form align-body">
      <h1>Profil Girisi</h1>
      <form className="form-default">
        <label>Cep Telefonu (0555 555 55 55)</label>
        <input type="text" />
        <label>Sifre</label>
        <input type="password" />
        <button type="submit">Tamam</button>
      </form>
    </section>
  );
};

export default registerForm;
