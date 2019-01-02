import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";
import "../../public/styles/Main.scss";
import SuggestBlog from "../suggest-blog/suggest-blog.js";
import UserProfileInfo from "../user-profile-info/user-profile-info.js";
import ContactUsWidget from "../contact-us-widget/contact-us-widget.js";

class userProfile extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.logout = this.logout.bind(this);
    this.reRenderFunc = this.reRenderFunc.bind(this);
    this.state = {
      userData: null
    };
  }

  render() {
    return (
      <section className="user-profile align-body">
        <h1 className="user-profile-title">Profil Sayfaniz</h1>
        <div className="user-profile-flex">
          <div className="user-profile-info">
            <UserProfileInfo
              userData={
                this.state.userData ? this.state.userData : this.props.userData
              }
            />
            <br />
            <a className="red-link" onClick={this.logout}>
              Oturumu Kapat
            </a>
          </div>
          <div className="user-profile-console">
            <SuggestBlog
              userData={this.props.userData}
              reRender={this.reRenderFunc}
            />
            <ContactUsWidget alignBody={true} />
          </div>
        </div>
      </section>
    );
  }

  // this func being executed by child components to request view update
  reRenderFunc(updatedUserData) {
    this.setState({ userData: updatedUserData });
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
