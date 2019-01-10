import React, { Component } from "react";
import Link from "next/link";
import Recaptcha from "react-google-invisible-recaptcha";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      name: "",
      email: "",
      password: "",
      passwordRepeat: "",
      isVerified: false
    };
    this.formOnSubmit = this.formOnSubmit.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.buttonOnClick = this.buttonOnClick.bind(this);
    this.onResolved = this.onResolved.bind(this);
  }

  render() {
    return (
      <section className="user-register-form">
        <h2>Register</h2>
        <form className="default-form" onSubmit={this.formOnSubmit}>
          <label for="name">Full name</label>
          <input
            type="text"
            placeholder=" Name"
            id="name"
            name="name"
            minLength="3"
            required="required"
            maxLength="100"
            onChange={this.inputChange}
          />
          <label for="email">Email</label>
          <input
            type="email"
            placeholder=" @"
            id="email"
            name="email"
            minLength="8"
            required="required"
            maxLength="100"
            onChange={this.inputChange}
          />
          <label for="password">Password</label>
          <input
            type="password"
            placeholder=" Password"
            id="password"
            name="password"
            minLength="8"
            required="required"
            maxLength="100"
            onChange={this.inputChange}
          />
          <label for="passwordRepeat">Password confirm</label>
          <input
            type="password"
            minLength="8"
            placeholder=" Confirm password"
            id="passwordRepeat"
            name="passwordRepeat"
            required="required"
            maxLength="100"
            onChange={this.inputChange}
          />
          <button type="submit" onClick={this.buttonOnClick}>
            Sign up!
          </button>
          <Recaptcha
            ref={ref => (this.recaptcha = ref)}
            sitekey="6LceFoMUAAAAANS89MN_ERr8EU60f-OUJmnYMv2P"
            onResolved={this.onResolved}
          />
        </form>
      </section>
    );
  }

  inputChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  buttonOnClick() {
    const inputValues =
      this.state.name &&
      this.state.email &&
      this.state.password &&
      this.state.passwordRepeat;
    const passwordMatch =
      this.state.password.value === this.state.passwordRepeat.value;

    if (!inputValues) {
      alert("Please fill required form fields");
      this.recaptcha.reset();
    } else if (!passwordMatch) {
      alert("Password do NOT match!");
      this.recaptcha.reset();
    } else {
      // form is valid
      this.recaptcha.execute();
    }
  }

  formOnSubmit(e) {
    e.preventDefault();

    if (this.state.isVerified) {
      alert("everything fine submitted");
      // const registerUser = await axios.post("/api/contact/form", {
      //   name: this.state.name,
      //   email: this.state.email,
      //   password: this.state.password,
      //   passwordRepeat: this.state.passwordRepeat
      // });
    } else {
      alert("Please tick the box!");
    }
  }

  // recaptcha check
  onResolved() {
    const res = this.recaptcha.getResponse();
    if (res && res.length && typeof res === "string") {
      this.setState({
        isVerified: true
      });
    }
  }
}

export default RegisterForm;
