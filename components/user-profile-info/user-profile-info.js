import React, { Component } from "react";
import Link from "next/link";
import "../../public/styles/Main.scss";
const closeIcon = "/static/images/icons/close.svg";

class userProfileInfo extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.insertSuggestedBlogs = this.insertSuggestedBlogs.bind(this);
    this.showFullContent = this.showFullContent.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this.state = {
      popupHtml: false,
      title: "",
      content: "",
      status: ""
    };
  }

  render() {
    return (
      <section className="profile-info">
        {this.state.popupHtml && this.insertSuggestedBlogFullContent}
        <img src="/static/images/icons/avatar.png" />
        <div className="profile-info-phone">{this.props.userData.phone}</div>
        <div className="profile-info-name">
          <b>{this.props.userData.name}</b>
        </div>
        {this.props.userData.events_joined &&
        this.props.userData.events_joined.length ? (
          this.insertEvents(this.props.userData.events_joined)
        ) : (
          <div className="profile-info-noactivity">
            Henuz bir etkinlige katilmadiniz!
          </div>
        )}
        {this.props.userData.blogs_suggested &&
        this.props.userData.blogs_suggested.length ? (
          this.insertSuggestedBlogs(this.props.userData.blogs_suggested)
        ) : (
          <div className="profile-info-noactivity">
            Henuz makale yazmadiniz!
          </div>
        )}
      </section>
    );
  }

  insertSuggestedBlogs(suggestionList) {
    const jsx = suggestionList.map((item, i) => {
      const title = item[2];
      const content = item[3];
      const status = JSON.parse(item[4]);
      const dynamicPopupIndex = i;
      return (
        <div className="profile-info__posted-item">
          <h5
            onClick={() => {
              this.showFullContent(dynamicPopupIndex);
            }}
          >
            {title}
          </h5>
          <pre dangerouslySetInnerHTML={{ __html: content }} />
          <div className="profile-info__posted-item-status">
            {status
              ? "Tebrikler, bu makale postalandi!"
              : " 2 is gunu icerisinde postalanacak!"}
          </div>
        </div>
      );
    });
    return (
      <section className="profile-info__posted">
        <h3>Makaleleriniz</h3>
        {jsx}
      </section>
    );
  }
  // creates pop up which shows complete blog suggestion
  showFullContent(blogIndex) {
    const selectedArticle = document.querySelectorAll(
      ".profile-info__posted-item"
    )[blogIndex];
    this.setState({
      popupHtml: true,
      title: selectedArticle.childNodes[0].innerHTML,
      content: selectedArticle.childNodes[1].innerHTML,
      status: selectedArticle.childNodes[2].innerHTML
    });
  }

  get insertSuggestedBlogFullContent() {
    return (
      <section className="profile-info-popup">
        <div className="profile-info-popup-frame">
          <img src={closeIcon} onClick={this.closePopup} />
          <h5>{this.state.status}</h5>
          <h3>{this.state.title}</h3>
          <pre dangerouslySetInnerHTML={{ __html: this.state.content }} />
        </div>
      </section>
    );
  }

  closePopup() {
    this.setState({
      popupHtml: false,
      title: "",
      content: "",
      status: ""
    });
  }
}

export default userProfileInfo;
