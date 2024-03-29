module.exports = {
  siteMetadata: {
    title: "Philipp Spiess",
    author: "Philipp Spiess",
    description:
      "Front End Engineer at Facebook. Prev. curator of This Week in React, React DOM team member, and Lead Engineer at PSPDFKit. Loves building usable interaction designs.",
    siteUrl: "https://philippspiess.com",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/blog`,
        name: "blog",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/assets`,
        name: "assets",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 700,
            },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem",
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
          "gatsby-remark-reading-time",
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-30352287-1",
      },
    },
    "gatsby-plugin-feed",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Philipp Spiess Blog",
        short_name: "Philipp Spiess",
        start_url: "/",
        background_color: "#fffcf5",
        theme_color: "#8c7001",
        display: "minimal-ui",
        icon: "content/assets/profile-pic.jpg",
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
    "gatsby-plugin-linaria",
  ],
};
