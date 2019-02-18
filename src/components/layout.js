import { css } from "linaria";
import { Link, StaticQuery, graphql } from "gatsby";
import React from "react";
import Image from "gatsby-image";

export const globals = css`
  :global() {
    html {
      background-color: #fffcf5;
    }
  }
`;

export default function Layout(props) {
  return (
    <StaticQuery
      query={layoutQuery}
      render={data => {
        const { author } = data.site.siteMetadata;

        return props.children;
      }}
    />
  );
}

const layoutQuery = graphql`
  query LayoutQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 30, height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`;
