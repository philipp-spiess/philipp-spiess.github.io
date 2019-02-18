import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import { css } from "linaria";
import Image from "gatsby-image";

import Bio from "../components/bio";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm, scale } from "../utils/typography";

const header = css`
  width: 100%;
  height: 3.5rem;
  background: black;
  line-height: 3.5rem;

  padding-left: calc(1.75rem / 2);
  padding-right: calc(1.75rem / 2);

  a {
    color: rgba(255, 255, 255, 0.9);
  }

  h3 {
    color: #f9cc58;
    display: inline-block;
    margin: 0;
    font-weight: normal;
    vertical-align: top;
    line-height: 3.5rem;
    margin-left: 0.75rem;

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
  max-width: 600px;
  margin: 0 auto;
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
  console.log(props)
  const post = props.data.markdownRemark;
  const siteTitle = props.data.site.siteMetadata.title;
  const { previous, next } = props.pageContext;

  return (
      <StaticQuery
        query={headerQuery}
        render={data => {
          const { author } = data.site.siteMetadata;

          return (
            <>
              <header className={header}>
                <div className={`${container} ${headerContainer}`}>
                  <div>
                    <Image
                      fixed={data.avatar.childImageSharp.fixed}
                      alt={author}
                      className={image}
                      imgStyle={{
                        borderRadius: `50%`
                      }}
                    />
                    <h3>{author}</h3>
                  </div>
                  <div className={spacer} />
                  <Link to={`/`}>All Articles</Link>
                </div>
              </header>
              <div className={container}>
                <SEO
                  title={post.frontmatter.title}
                  description={post.excerpt}
                />
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
                <hr
                  style={{
                    marginBottom: rhythm(1)
                  }}
                />
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
                <Bio />
              </div>
            </>
          );
        }}
      />
  );
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
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
  }
`;

const headerQuery = graphql`
  query HeaderQuery {
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
