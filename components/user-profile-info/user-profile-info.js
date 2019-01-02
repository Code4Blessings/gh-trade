import React, { Component } from "react";
import Link from "next/link";
import "../../public/styles/Main.scss";

const userProfileInfo = props => {
  console.log(props.userData.blogs_suggested);
  return (
    <section className="profile-info">
      <img src="/static/images/icons/avatar.png" />
      <div className="profile-info-phone">{props.userData.phone}</div>
      <div className="profile-info-name">
        <b>{props.userData.name}</b>
      </div>
      {props.userData.events_joined && props.userData.events_joined.length ? (
        insertEvents(props.userData.events_joined)
      ) : (
        <div className="profile-info-noactivity">
          Henuz bir etkinlige katilmadiniz!
        </div>
      )}
      <br />
      {props.userData.blogs_suggested &&
      props.userData.blogs_suggested.length ? (
        insertSuggestedBlogs(props.userData.blogs_suggested)
      ) : (
        <div className="profile-info-noactivity">Henuz makale yazmadiniz!</div>
      )}
    </section>
  );
};

// HERSEY GUEZL, BU BLOG SUGGESTION LIST EKLENIYOR,
// TITLE LAR LISTELENSIN, VE PARAGRAF HIDDEN OLSUN
// WHEN USER CLICKED THE TITLE IT SHOULD OPEN A LARGE WINDOW WHICH SHOWS TITLE, CONTENT, STATUS IN FULL SCREEN, WITH A CLOSE ICON

function insertSuggestedBlogs(suggestionList) {
  const jsx = suggestionList.map(item => {
    const title = item[2];
    const content = item[3];
    const status = JSON.parse(item[4]);
    return (
      <div>
        <h5>{title}</h5>
        <p>{content}</p>
        <span>
          {status ? "Makaleniz postalandi!" : " 48 saat icinde postalanacak!"}
        </span>
      </div>
    );
  });
  return (
    <section>
      <h4>Makaleleriniz</h4>
      {jsx}
    </section>
  );
}
export default userProfileInfo;
