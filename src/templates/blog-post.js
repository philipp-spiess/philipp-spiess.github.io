import { css } from "linaria";
import { Link, graphql } from "gatsby";
import Image from "gatsby-image";
import React from "react";

import { rhythm, scale } from "../utils/typography";
import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";

const header = css`
  width: 100%;
  height: 3.5rem;
  line-height: 3.5rem;

  h3 {
    display: inline-block;
    margin: 0;
    vertical-align: top;
    line-height: 3.5rem;
    margin-left: 0.75rem;
    font-weight: 700;

    font-size: 1.2rem;
  }

  .gatsby-image-wrapper {
    margin-top: calc((3.5rem - 30px) / 2);
    margin-bottom: calc((3.5rem - 30px) / 2);
  }

  @media screen and (min-width: 500px) {
    padding-left: 1.75rem;
    padding-right: 1.75rem;
  }
`;

const spacer = css`
  flex: 1 1 0%;
`;

const container = css`
  max-width: 610px;
  padding: 0 calc(1.75rem / 2);
  margin: 0 auto;

  .gatsby-resp-image-wrapper {
    margin-left: calc(-1.75rem / 2) !important;
    margin-right: calc(-1.75rem / 2) !important;
    max-width: 610px !important;
    overflow: hidden;

    @media screen and (min-width: 700px) {
      border-radius: 10px;
      margin-left: -50px !important;
      margin-right: -50px !important;
      max-width: 700px !important;
    }
  }
`;

const headerContainer = css`
  display: flex;
`;

const image = css`
  margin-bottom: 0;
  min-width: 30px;
  border-radius: 100%;
`;

export default function BlogPostTemplate(props) {
  const post = props.data.markdownRemark;

  const { siteMetadata } = props.data.site;

  const { previous, next } = props.pageContext;
  const { author } = siteMetadata;

  return (
    <Layout>
      <header className={header}>
        <div className={`${container} ${headerContainer}`}>
          <div>
            <Image
              fadeIn={false}
              fixed={props.data.avatar.childImageSharp.fixed}
              alt={author}
              className={image}
              imgStyle={{
                borderRadius: `50%`
              }}
            />
            <h3>{author}</h3>
          </div>
          <div className={spacer} />
          <div>
            <Link to={`/`}>All Articles</Link>
          </div>
        </div>
      </header>
      <div className={`${container} post`}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1)
          }}
        >
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        {previous || previous ? (
          <>
            <hr />
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0
              }}
            >
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </>
        ) : null}
        <h4 style={{ marginTop: "3.5rem" }}>About the author</h4>
        <Bio />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 30, height: 30) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`;
