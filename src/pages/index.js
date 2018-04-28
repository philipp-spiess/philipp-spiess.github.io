import React from "react";
import { analytics } from "../utils";

import "./index.css";

const AVATAR_URL =
  "https://secure.gravatar.com/avatar/046db2877d2f9342de37d0d59c5df4a9?s=400";

export default class IndexPage extends React.Component {
  state = { isImageLoaded: false };

  componentDidMount() {
    const img = new Image();
    img.onload = () => this.setState({ isImageLoaded: true });
    img.src = AVATAR_URL;

    analytics();
  }

  render() {
    if (!this.state.isImageLoaded) {
      return null;
    }

    return (
      <div className="about">
        <img
          src={AVATAR_URL}
          className="avatar animated fadeInDown"
          width={200}
        />
        <div className="title">
          <h1 className="animated fadeInDown">Philipp Spiess</h1>
          <h3 className="animated fadeInDown">
            JavaScript | React | WebAssembly | Elixir
          </h3>
        </div>
        <h2 className="animated fadeIn">
          I’m a Vienna based software engineer with an affection for interaction
          design.<br />
          I work for <a href="https://pspdfkit.com">PSPDFKit</a> where I build
          industry leading PDF frameworks.
        </h2>
        <ul className="list-inline social-icons">
          <li>
            <a
              href="https://github.com/philipp-spiess"
              className="github animated fadeIn"
            >
              <i className="icon-github" />
            </a>
          </li>
          <li>
            <a
              href="mailto:hello@philippspiess.com"
              className="email animated fadeIn"
            >
              <i className="icon-mail" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/philipp-spiess"
              className="linkedin animated fadeIn"
            >
              <i className="icon-linkedin" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/philippspiess"
              className="twitter animated fadeIn"
            >
              <i className="icon-twitter" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
