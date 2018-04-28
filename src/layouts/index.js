import React from "react";
import Helmet from "react-helmet";

import "./fonts.css";
import "./animate.css";
import "./index.css";

const Layout = ({ children, data }) => (
  <div>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <link
        rel="shortcut icon"
        href="http://gravatar.com/avatar/046db2877d2f9342de37d0d59c5df4a9?s=32"
        type="image/x-icon"
      />
      <meta name="author" content="Philipp Spiess" />
      <meta name="city" content="Vienna" />
      <meta name="country" content="Austria" />
      <meta name="state" content="Vienna" />
      <meta name="zipcode" content="1190" />
      <meta name="geo.position" content="48.208174;16.373819" />
      <meta name="geo.placename" content="Vienna, VIE" />
      <meta name="geo.region" content="AT" />
      <meta name="robots" content="index, follow" />
    </Helmet>
    <div className="container">{children()}</div>
  </div>
);

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
