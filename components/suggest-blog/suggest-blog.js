import React, { Component } from "react";
import Link from "next/link";
import "../../public/styles/Main.scss";
const loader = "/static/images/loader.gif";

class SuggestBlog extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      title: "",
      content: "",
      loading: false,
      successMsg: false
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
            value={this.state.title}
          />
          <textarea
            placeholder=" Makale..."
            onChange={e => {
              this.setState({ content: e.target.value });
            }}
            minLength="2000"
            value={this.state.content}
          />
          <button type="submit">Makaleyi Postala</button>
        </form>
        {this.state.loading && <img src={loader} className="loader" />}
        {this.state.successMsg && (
          <h4 className="success-msg">Tebrikler, makaleniz eklendi</h4>
        )}
      </section>
    );
  }

  async handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const content = this.state.content;
    const title = this.state.title;
    const member = this.props.userData;
    if (content.length && title.length) {
      form.style.visibility = "hidden";
      // show loader, clear up input values
      this.setState({
        loading: true,
        content: "",
        title: ""
      });
      // set timer to remove loader
      setTimeout(() => {
        // remove loader
        this.setState({ loading: false });
        // insert succes message
        this.setState({ successMsg: true });
        setTimeout(() => {
          //remove succes message
          this.setState({ successMsg: false });
          //insert new form
          form.style.visibility = "visible";
        }, 8000);
      }, 2500);
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
