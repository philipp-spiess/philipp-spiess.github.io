import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import { css } from "linaria";
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import { rhythm } from "../utils/typography";

const bio = css`
  text-align: left;
`;

const image = css`
  margin-bottom: 0;
  min-width: 100px;
  border-radius: 100%;
`;

const title = css`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 1rem;
`;

const ipa = css`
  color: rgba(0, 0, 0, 0.5);
`;

const intro = css`
  margin-top: 1rem;
`;

const list = css`
  margin-left: 1.75rem;
  margin-bottom: 0;

  > li {
    margin-bottom: calc(1.75rem / 6);
  }

  @media screen and (min-width: 900px) {
    margin-bottom: 1.75rem;
  }
`;

const noLinkStyle = {
  boxShadow: "none",
  textDecoration: "none",
  color: "inherit"
};

export default function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata;
        return (
          <div className={bio}>
            <div>
              <Link style={noLinkStyle} to={`/`}>
                <Image
                  fixed={data.avatar.childImageSharp.fixed}
                  alt={author}
                  className={image}
                  imgStyle={{
                    borderRadius: `50%`
                  }}
                />
              </Link>
            </div>

            <div className={title}>
              Philipp Spiess <small className={ipa}>[ˈʃpiːs]</small>
            </div>

            <p className={intro}>
              Lead Engineer at{" "}
              <OutboundLink
                href="https://pspdfkit.com/pdf-sdk/web/"
                target="_blank"
                rel="noopener noreferrer"
              >
                PSPDFKit for Web
              </OutboundLink>
              ,{" "}
              <OutboundLink
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React DOM
              </OutboundLink>{" "}
              team member, and curator of{" "}
              <OutboundLink
                href="https://this-week-in-react.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                This Week in React
              </OutboundLink>
              . He loves learning and building usable interaction designs.
            </p>
            <ul className={list}>
              <li>
                <OutboundLink
                  href="https://twitter.com/philippspiess"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </OutboundLink>
              </li>
              <li>
                <OutboundLink
                  href="https://github.com/philipp-spiess"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </OutboundLink>
              </li>
              <li>
                <a href="mailto:hello@philippspiess.com">Mail</a>
              </li>
              <li>
                <OutboundLink
                  href="https://www.linkedin.com/in/philipp-spiess/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </OutboundLink>
              </li>
            </ul>
          </div>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
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
