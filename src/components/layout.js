import { css } from "linaria";
import React from "react";

export const globals = css`
  :global() {
    html {
      background-color: #fffcf5;
    }

    .post .bio {
      @media screen and (min-width: 560px) {
        flex-direction: row !important;
      }
    }

    .index .bio {
      @media screen and (max-width: 700px) and (min-width: 560px) {
        flex-direction: row !important;
      }
    }

    /**
     * @TODO make sure this looks similiar to images and then get the lucy theme working
     * Based on copypasta from Remy Bach, Sarah Drasner, Dan Abramov
     * Theme is Lucy by Juliette Prétot
     * https://github.com/juliettepretot/lucy-vscode-theme
     */
    code[class*="language-"],
    pre[class*="language-"] {
      color: white;
      background: none;
      font-family: Consolas, Menlo, Monaco, source-code-pro, Courier New,
        monospace;
      font-feature-settings: normal;
      text-align: left;
      white-space: pre;
      word-spacing: normal;
      word-break: normal;
      word-wrap: normal;
      line-height: 1.5;
      margin-bottom: 0;

      -moz-tab-size: 4;
      -o-tab-size: 4;
      tab-size: 4;

      -webkit-hyphens: none;
      -moz-hyphens: none;
      -ms-hyphens: none;
      hyphens: none;
    }

    /* Code blocks */
    pre[class*="language-"] {
      overflow: auto;
      padding: 1.3125rem;
    }

    .token.attr-name {
      color: green;
    }

    .token.comment {
      color: #5e6173;
      font-style: italic;
    }

    .token.string,
    .token.url {
      color: #e8d56d;
    }

    .token.variable {
      color: green;
    }

    .token.number {
      color: #af98e6;
    }

    .token.builtin,
    .token.char,
    .token.function {
      color: #76c5a4;
    }

    .token.constant {
      color: #56c9db;
    }

    .token.punctuation {
      color: #88898f;
    }

    .token.selector,
    .token.doctype {
      color: green;
    }

    .token.class-name {
      color: #76c5a4;
    }

    .token.tag,
    .token.operator,
    .token.keyword {
      color: #fb7da7;
    }

    .token.boolean {
      color: #af98e6;
    }

    .token.property {
      color: green;
    }

    .token.namespace {
      color: green;
    }

    pre[data-line] {
      padding: 1em 0 1em 3em;
      position: relative;
    }

    .gatsby-highlight-code-line {
      background-color: hsla(207, 95%, 15%, 1);
      display: block;
      margin-right: -1.3125rem;
      margin-left: -1.3125rem;
      padding-right: 1em;
      padding-left: 0.75em;
      border-left: 0.25em solid #ffa7c4;
    }

    .gatsby-highlight {
      margin-bottom: 1.75rem;

      border-radius: 10px;
      background: #1a1d27;
      -webkit-overflow-scrolling: touch;
      overflow: auto;

      margin-left: calc(-1.75rem / 2) !important;
      margin-right: calc(-1.75rem / 2) !important;
      max-width: 610px !important;

      @media screen and (min-width: 700px) {
        margin-left: -50px !important;
        margin-right: -50px !important;
        max-width: 700px !important;
      }
    }

    @media (max-width: 700px) {
      .gatsby-highlight {
        border-radius: 0;
      }
    }

    .gatsby-highlight pre[class*="language-"] {
      float: left;
      min-width: 100%;
    }
  }
`;

const layout = css`
  margin-bottom: 3.5rem;
`;

export default function Layout(props) {
  return <div className={layout}>{props.children}</div>;
}
