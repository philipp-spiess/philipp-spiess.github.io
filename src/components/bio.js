import { css } from "linaria";
import { Link, StaticQuery, graphql } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Avatar from "./avatar";
import React from "react";

const bio = css`
  text-align: left;
  display: flex;
  flex-direction: column;
`;

const avatar = css`
  min-width: calc(100px + 1.75rem);
  display: flex;
  padding-top: 8px;
`;

const about = css``;

const image = css`
  margin-bottom: 0;
  min-width: 100px;
  border-radius: 100%;
`;

const title = css`
  font-size: 1.2rem;
  font-weight: bold;
`;

const ipa = css`
  color: rgba(0, 0, 0, 0.5);
`;

const intro = css`
  margin: 1.25rem 0;
`;

const list = css`
  margin: 0;
  display: flex;
  list-style-type: none;
  max-width: 300px;

  > li {
    margin: calc(1.75rem / 6);
    margin-top: 0;
    flex-grow: 1;

    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;

const noLinkStyle = {
  boxShadow: "none",
  textDecoration: "none",
  color: "inherit",
};

export default function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        const { author } = data.site.siteMetadata;
        return (
          <div className={`${bio} bio`}>
            <div className={avatar}>
              <Link style={noLinkStyle} to="/">
                <Avatar width={100} />
              </Link>
            </div>
            <div className={about}>
              <div className={title}>
                Philipp Spiess <small className={ipa}>[ˈʃpiːs]</small>
              </div>

              <p className={intro}>
                Front End Engineer at Facebook. Prev. curator of{" "}
                <OutboundLink
                  href="https://this-week-in-react.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  This Week in React
                </OutboundLink>
                ,{" "}
                <OutboundLink
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React DOM
                </OutboundLink>{" "}
                team member, and Lead Engineer at{" "}
                <OutboundLink
                  href="https://pspdfkit.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PSPDFKit
                </OutboundLink>
                . Loves building usable interaction designs.
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
          </div>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author
      }
    }
  }
`;
