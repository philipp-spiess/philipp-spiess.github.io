import { css } from "linaria";
import { Link, graphql } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Bio from "../components/bio";

const container = css`
  min-height: 100vh;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 0 auto;

  @media screen and (min-width: 700px) {
    flex-direction: row;
  }
`;

const left = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  padding-top: 1.75rem;
  padding-left: calc(1.75rem / 2);
  padding-right: calc(1.75rem / 2);
  height: 100%;

  @media screen and (min-width: 500px) {
    padding-left: 1.75rem;
    padding-right: 1.75rem;
  }

  @media screen and (min-width: 700px) {
    padding-top: 3.5rem;
    width: 350px;
  }
`;

const right = css`
  padding-bottom: 3.5rem;
  padding-left: calc(1.75rem / 2);
  padding-right: calc(1.75rem / 2);

  @media screen and (min-width: 500px) {
    padding-left: 1.75rem;
    padding-right: 1.75rem;
  }
`;

export default class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Philipp Spiess"
          keywords={[
            "blog",
            "javascript",
            "react",
            "webassembly",
            "elixir",
            "ruby"
          ]}
        />
        <div className={`${container} index`}>
          <aside className={left}>
            <Bio />
          </aside>
          <main className={right}>
            {posts.map(({ node }) => {
              const external = node.frontmatter.external;

              return external ? (
                <ExternalPost key={node.fields.slug} node={node} />
              ) : (
                <Post key={node.fields.slug} node={node} />
              );
            })}
          </main>
        </div>
      </Layout>
    );
  }
}

const postTitle = css`
  margin-top: calc(3.5rem / 4 * 3);
  margin-bottom: 0.5rem;

  @media screen and (min-width: 500px) {
    margin-top: 3.5rem;
  }
`;

function Post(props) {
  const { node } = props;

  const title = node.frontmatter.title || node.fields.slug;

  return (
    <div key={node.fields.slug}>
      <h3 className={postTitle}>
        <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
          {title}
        </Link>
      </h3>
      <small>{node.frontmatter.date}</small>
      <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
    </div>
  );
}

function ExternalPost(props) {
  const { node } = props;
  const title = node.frontmatter.title || node.fields.slug;
  const external = node.frontmatter.external;

  const domain = external.split("/")[2];

  return (
    <div key={node.fields.slug}>
      <h3 className={postTitle}>
        <OutboundLink href={external} style={{ boxShadow: `none` }}>
          {title}
        </OutboundLink>
      </h3>
      <small>
        {node.frontmatter.date} • {domain}
      </small>
    </div>
  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            external
          }
        }
      }
    }
  }
`;
