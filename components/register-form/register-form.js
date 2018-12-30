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
      city: "",
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
          <label>Sehir</label>
          <select
            name="city"
            required="required"
            onChange={e => {
              this.setState({ city: e.target.value });
            }}
          >
            <option value="">Sehir seciniz</option>
            <option value="İstanbul">İstanbul</option>
            <option value="Ankara">Ankara</option>
            <option value="İzmir">İzmir</option>
            <option value="Adana">Adana</option>
            <option value="Adıyaman">Adıyaman</option>
            <option value="Afyonkarahisar">Afyonkarahisar</option>
            <option value="Ağrı">Ağrı</option>
            <option value="Aksaray">Aksaray</option>
            <option value="Amasya">Amasya</option>
            <option value="Antalya">Antalya</option>
            <option value="Ardahan">Ardahan</option>
            <option value="Artvin">Artvin</option>
            <option value="Aydın">Aydın</option>
            <option value="Balıkesir">Balıkesir</option>
            <option value="Bartın">Bartın</option>
            <option value="Batman">Batman</option>
            <option value="Bayburt">Bayburt</option>
            <option value="Bilecik">Bilecik</option>
            <option value="Bingöl">Bingöl</option>
            <option value="Bitlis">Bitlis</option>
            <option value="Bolu">Bolu</option>
            <option value="Burdur">Burdur</option>
            <option value="Bursa">Bursa</option>
            <option value="Çanakkale">Çanakkale</option>
            <option value="Çankırı">Çankırı</option>
            <option value="Çorum">Çorum</option>
            <option value="Denizli">Denizli</option>
            <option value="Diyarbakır">Diyarbakır</option>
            <option value="Düzce">Düzce</option>
            <option value="Edirne">Edirne</option>
            <option value="Elazığ">Elazığ</option>
            <option value="Erzincan">Erzincan</option>
            <option value="Erzurum">Erzurum</option>
            <option value="Eskişehir">Eskişehir</option>
            <option value="Gaziantep">Gaziantep</option>
            <option value="Giresun">Giresun</option>
            <option value="Gümüşhane">Gümüşhane</option>
            <option value="Hakkâri">Hakkâri</option>
            <option value="Hatay">Hatay</option>
            <option value="Iğdır">Iğdır</option>
            <option value="Isparta">Isparta</option>
            <option value="Kahramanmaraş">Kahramanmaraş</option>
            <option value="Karabük">Karabük</option>
            <option value="Karaman">Karaman</option>
            <option value="Kars">Kars</option>
            <option value="Kastamonu">Kastamonu</option>
            <option value="Kayseri">Kayseri</option>
            <option value="Kırıkkale">Kırıkkale</option>
            <option value="Kırklareli">Kırklareli</option>
            <option value="Kırşehir">Kırşehir</option>
            <option value="Kilis">Kilis</option>
            <option value="Kocaeli">Kocaeli</option>
            <option value="Konya">Konya</option>
            <option value="Kütahya">Kütahya</option>
            <option value="Malatya">Malatya</option>
            <option value="Manisa">Manisa</option>
            <option value="Mardin">Mardin</option>
            <option value="Mersin">Mersin</option>
            <option value="Muğla">Muğla</option>
            <option value="Muş">Muş</option>
            <option value="Nevşehir">Nevşehir</option>
            <option value="Niğde">Niğde</option>
            <option value="Ordu">Ordu</option>
            <option value="Osmaniye">Osmaniye</option>
            <option value="Rize">Rize</option>
            <option value="Sakarya">Sakarya</option>
            <option value="Samsun">Samsun</option>
            <option value="Siirt">Siirt</option>
            <option value="Sinop">Sinop</option>
            <option value="Sivas">Sivas</option>
            <option value="Şırnak">Şırnak</option>
            <option value="Tekirdağ">Tekirdağ</option>
            <option value="Tokat">Tokat</option>
            <option value="Trabzon">Trabzon</option>
            <option value="Tunceli">Tunceli</option>
            <option value="Şanlıurfa">Şanlıurfa</option>
            <option value="Uşak">Uşak</option>
            <option value="Van">Van</option>
            <option value="Yalova">Yalova</option>
            <option value="Yozgat">Yozgat</option>
            <option value="Zonguldak">Zonguldak</option>
          </select>
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
      city: this.state.city,
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
