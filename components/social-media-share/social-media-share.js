import React, { Component } from "react";
import Link from "next/link";
import "../../public/styles/Main.scss";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon
} from "react-share";

class SocialMediaShare extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      shareUrl: ""
    };
  }

  render() {
    return (
      <section className="social">
        <div className="social__frame">
          <div className="social__frame-item">
            <FacebookShareButton
              url={this.state.shareUrl}
              className="Demo__some-network__share-button"
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </div>
          <div className="social__frame-item">
            <TwitterShareButton
              url={this.state.shareUrl}
              className="Demo__some-network__share-button"
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </div>
          <div className="social__frame-item">
            <WhatsappShareButton
              url={this.state.shareUrl}
              separator=":: "
              className="Demo__some-network__share-button"
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>
        </div>
      </section>
    );
  }

  componentDidMount() {
    this.setState({
      shareUrl: window.location.href
    });
  }
}

export default SocialMediaShare;
