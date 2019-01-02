import React, { Component } from "react";
import Link from "next/link";
import "../../public/styles/Main.scss";

class SuggestBlog extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      title: "",
      content: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <section className="suggest-blog">
        <h2>Sitemizde makale yayinla</h2>
        <p>
          Sizde sitemiz icin makale yazabilirsiniz ve makaleniz yuzlerce ve
          binlerce kisi tarafindan okunsun! Tecrubeleriniz, bilginizi ve
          goruslerinizi yasitlariniz ile paylasmak isterseniz buyurun bir
          makalede siz yazin. Konusu ve icerigi tamamen size kalmis. (BABA
          buranin yazisina sen ayar verirsin iste!)
        </p>
        <form
          className="form-default"
          method="post"
          action="/user/blog/suggest"
          onSubmit={this.handleSubmit}
        >
          <label>*Makale basligi</label>
          <input
            type="text"
            placeholder=" Baslik"
            onChange={e => {
              this.setState({ title: e.target.value });
            }}
            minLength="10"
          />
          <textarea
            placeholder=" Makale..."
            onChange={e => {
              this.setState({ content: e.target.value });
            }}
            minLength="2000"
          />
          <button type="submit">Makaleyi Postala</button>
        </form>
      </section>
    );
  }

  async handleSubmit(e) {
    e.preventDefault();
    const content = this.state.content;
    const title = this.state.title;
    const member = this.props.userData;
    if (content.length && title.length) {
      const body = {
        title,
        content,
        member
      };
      // send blog suggestion
      const { data } = await axios.post("/api/user/blog/suggest", body);

      if (data && data.blogs_suggested.length) {
        // Blogs suggest succesful - triger parent component for rerender profile page
        this.props.reRender(data);
      }
    }
  }
}

export default SuggestBlog;