import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";
import "../../public/styles/Main.scss";
import UserProfile from "../user-profile/user-profile";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      alertLogin: false,
      alertFail: false,
      password: "",
      number: "",
      failMsg: "",
      numberInput: "",
      passwordInput: "",
      authenticated: false,
      userData: ""
    };
  }

  render() {
    return (
      <div>
        {this.state.authenticated ? (
          <UserProfile userData={this.state.userData} />
        ) : (
          this.renderLoginPage
        )}
      </div>
    );
  }

  componentWillMount() {
    if (this.props.authenticated) {
      // update view to render profile page instead of login
      this.setState({
        authenticated: true
      });
    }
  }

  get renderLoginPage() {
    return (
      <section className="register-form align-body">
        <h1>Profil Girisi</h1>
        {this.state.alertLogin && (
          <p className="alert">{`Telefon: ${this.state.number} Sifre: ${
            this.state.password
          }`}</p>
        )}
        {this.state.alertFail && <p className="alert">{this.state.failMsg}</p>}
        <form
          className="form-default"
          method="post"
          action="/api/user/login"
          onSubmit={this.handleSubmit.bind(this)}
        >
          <label>Cep Telefonu (0555 555 55 55)</label>
          <input
            id="bla"
            type="number"
            minLength="10"
            maxLength="14"
            required="required"
            onChange={e => {
              this.setState({ numberInput: e.target.value });
            }}
          />
          <label>Sifre</label>
          <input
            type="password"
            required="required"
            minLength="8"
            onChange={e => {
              this.setState({ passwordInput: e.target.value });
            }}
          />
          <button type="submit">Tamam</button>
        </form>
      </section>
    );
  }

  async handleSubmit(e) {
    e.preventDefault();
    if (this.state.passwordInput.length && this.state.numberInput.length) {
      // credentials
      const body = {
        password: this.state.passwordInput,
        number: this.state.numberInput
      };
      // authenticate
      const { data } = await axios.post("/api/user/login", body);
      if (data.user === false) {
        //Authentication failed
        this.setState({
          alertFail: true,
          failMsg: "Yanlis Bilgi Girdiniz!"
        });
      } else {
        // autentication success
        this.setState({
          authenticated: true,
          userData: data
        });

        // save user data to local storage for persistence state
        localStorage.setItem("userData", JSON.stringify(data));

        // save to localstorage as user logged in
        localStorage.setItem("authenticationStatus", JSON.stringify(true));
      }
    }
  }

  componentDidMount() {
    if (this.state.authenticated) {
      // get already authenticated user data and for persistence state
      const userData = JSON.parse(localStorage.getItem("userData"));
      // update view and insert user data from locaol storage
      this.setState({
        userData
      });
    }

    // code bellow only for users newly registered and redirect to login page for the first time
    const regexForNumber = new RegExp("[?&]" + "number" + "(=([^&#]*)|&|#|$)");
    const regexForPassword = new RegExp(
      "[?&]" + "password" + "(=([^&#]*)|&|#|$)"
    );
    const numberArr = regexForNumber.exec(window.location.href);
    const passwordArr = regexForPassword.exec(window.location.href);
    if (numberArr && numberArr[2] && passwordArr && passwordArr[2]) {
      this.setState({
        alertLogin: true,
        number: numberArr[2],
        password: passwordArr[2]
      });
    }
  }
}

export default LoginForm;
