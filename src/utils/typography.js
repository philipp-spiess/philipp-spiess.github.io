import { MOBILE_MEDIA_QUERY } from "typography-breakpoint-constants";
import gray from "gray-percentage";
import Typography from "typography";

const typography = new Typography({
  title: "Philipp Spiess Theme 2019",
  baseFontSize: "16px",
  baseLineHeight: 1.75,
  scaleRatio: 2.5,
  headerFontFamily: ["Merriweather", "Georgia", "serif"],
  bodyFontFamily: ["Merriweather", "Georgia", "serif"],
  bodyColor: "rgba(0, 0, 0, 0.9)",
  headerWeight: 900,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    h1: {
      fontFamily: "Tahoma, Helvetica, sans-serif"
    },
    blockquote: {
      ...scale(1 / 5),
      color: gray(41),
      fontStyle: "italic",
      paddingLeft: rhythm(13 / 16),
      marginLeft: 0,
      borderLeft: `${rhythm(3 / 16)} solid ${gray(10)}`
    },
    "blockquote > :last-child": {
      marginBottom: 0
    },
    "blockquote cite": {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight
    },
    "blockquote cite:before": {
      content: '"— "'
    },
    ul: {
      listStyle: "disc"
    },
    "ul,ol": {
      marginLeft: rhythm(6 / 4)
    },
    [MOBILE_MEDIA_QUERY]: {
      "ul,ol": {
        marginLeft: rhythm(1)
      },
      blockquote: {
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: rhythm(9 / 16)
      }
    },
    "h1,h2,h3,h4,h5,h6": {
      marginTop: rhythm(1)
    },
    h4: {
      letterSpacing: "0.140625em",
      textTransform: "uppercase"
    },
    h6: {
      fontStyle: "italic"
    },
    a: {
      boxShadow: "inset 0 -1px 0 0 currentColor",
      color: "#8e6e15",
      textDecoration: "none"
    },
    "a:hover,a:active": {
      boxShadow: "none"
    },
    "mark,ins": {
      background: "#8e6e15",
      color: "white",
      padding: `${rhythm(1 / 16)} ${rhythm(1 / 8)}`,
      textDecoration: "none"
    }
  })
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
