module.exports = {
  siteMetadata: {
    title: `Backbencher.dev`,
    description: `Learn JavaScript and React`,
    siteUrl: `https://backbencher.dev`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
        {
          allMdx{
            nodes {
              frontmatter{
                title
                date
              }
            }
          }
        }
        `,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/articles`,
        name: `articles`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["UA-152056684-1"],
        pluginConfig: {
          head: false,
        },
      },
    },
  ],
};
