import React, { Component } from "react";
import Link from "next/link";
import "../../public/styles/Main.scss";
import loginForm from "./forms/login.js";
import RegisterForm from "./forms/register.js";
import preregisterForm from "./forms/preregister.js";
const carImg = "/static/images/cars-for-sale.png";
// import popup from "../../helpers/client/popup.js";

class AnimatedForm extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <section className="sell-your-car">
        <div className="sell-your-car__left">{this.resolveFormType}</div>
        <div className="sell-your-car__right">
          <img src={carImg} />
        </div>
      </section>
    );
  }

  // resolves which form to be rendered
  get resolveFormType() {
    const formRef = this.props.formToRender.ref;
    const resolvedForm =
      formRef === "register" ? (
        <RegisterForm />
      ) : formRef === "login" ? (
        loginForm()
      ) : formRef === "preregister" ? (
        preregisterForm()
      ) : (
        ""
      );
    return resolvedForm;
  }
}

export default AnimatedForm;
