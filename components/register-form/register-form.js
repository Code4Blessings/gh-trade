import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";
import "../../public/styles/Main.scss";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      passwordOne: "",
      passwordTwo: "",
      name: "",
      number: "",
      alert: ""
    };
  }

  render() {
    return (
      <section className="register-form align-body">
        <h1>Uyelik icin formu doldurunuz</h1>
        {this.state.alert && <div className="alert">{this.state.alert}</div>}
        <form className="form-default" onSubmit={handleSubmit.bind(this)}>
          <label>Ad Soyad</label>
          <input
            type="text"
            minLength="5"
            maxLength="80"
            required="required"
            onChange={e => {
              this.setState({ name: e.target.value });
            }}
          />
          <label>Cep Telefonu (0555 555 55 55)</label>
          <input
            type="number"
            required="required"
            placeholder=" Sitemize numaraniz ile giris yapacaksiniz"
            onChange={e => {
              this.setState({ number: e.target.value });
            }}
          />
          <label>Sifre (En az 8 hane)</label>
          <input
            type="password"
            required="required"
            minLength="8"
            onChange={e => {
              this.setState({ passwordOne: e.target.value });
            }}
          />
          <label>Sifre Tekrar</label>
          <input
            type="password"
            required="required"
            minLength="8"
            onChange={e => {
              this.setState({ passwordTwo: e.target.value });
            }}
          />
          <button type="submit">kayit ol</button>
        </form>
      </section>
    );
  }
}

async function handleSubmit(e) {
  e.preventDefault();

  // phone numbers start with 05 and 11 digits
  const isNumberGenuine = /^(0)(5)\d{9}$/.test(this.state.number);

  // if password confirmed
  if (this.state.passwordOne !== this.state.passwordTwo) {
    alert("Sifreler Eslesmiyor!");

    // if phone number is correct
  } else if (!isNumberGenuine) {
    alert("Yanlis bir cep telefonu numarasi girdiniz!");

    // user data is correct
  } else {
    // user data
    const body = {
      password: this.state.passwordOne,
      name: this.state.name,
      number: this.state.number
    };

    // register new user
    const { data } = await axios.post("/api/register/form", body);

    // if user was successfuly saved
    if (data.saved) {
      Router.push({
        pathname: "/login",
        query: {
          number: this.state.number,
          password: this.state.passwordOne
        }
      });
      // if user already exist
    } else if (data.dublicate) {
      this.setState({
        alert: `${this.state.number} numarasi zaten kayitlidir!`
      });
      // user register failed
    } else {
      this.setState({
        alert: "Uye kayiti yapilamamaktadir, lutfen daha sonra tekrar deneyin"
      });
    }
  }
}

export default RegisterForm;
