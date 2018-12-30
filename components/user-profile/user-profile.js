import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";
import "../../public/styles/Main.scss";

class userProfile extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.logout = this.logout.bind(this);
  }

  render() {
    return (
      <section className="user-profile align-body">
        <a className="red-link" onClick={this.logout}>
          Oturumu Kapat
        </a>
        <div />
        <img src={this.props.userData.photo} />
        <div>
          <b>city:</b> {this.props.userData.city}
        </div>
        <div>
          <b>phone:</b> {this.props.userData.phone}
        </div>
        <div>
          <b>name:</b> {this.props.userData.name}
        </div>
        {this.props.userData.events_joined &&
        this.props.userData.events_joined.length ? (
          this.insertEvents(this.props.userData.events_joined)
        ) : (
          <div>Henuz bir aktiviteye katilmadiniz!</div>
        )}
      </section>
    );
  }

  insertEvents(events) {
    const jsx = events.map(event => {
      return (
        <Link href={event.url}>
          <a>{event.title}</a>
        </Link>
      );
    });
    return <div>{jsx}</div>;
  }

  logout() {
    // logout user on server
    axios.get("/api/user/logout");

    // logout user on browser
    localStorage.setItem("authenticationStatus", JSON.stringify(false));

    // redirect to homepage
    Router.push("/");
  }
}

export default userProfile;
