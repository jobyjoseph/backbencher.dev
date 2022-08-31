module.exports = {
  siteMetadata: {
    title: `Backbencher.dev`,
    description: `Learn JavaScript and React`,
    siteUrl: `https://backbencher.dev`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify`,
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
          allMdx {
            nodes {
              frontmatter {
                date
                slug
              }
            }
          }
        }
      `,
        resolveSiteUrl: () => `https://backbencher.dev`,
        resolvePages: ({
          allSitePage: { nodes: allPages },
          allMdx: { nodes: allMdxNodes },
        }) => {
          const mdxNodeMap = allMdxNodes.reduce((acc, node) => {
            const {
              frontmatter: { slug },
            } = node;
            acc[`/articles/${slug}`] = node;

            return acc;
          }, {});

          return allPages.map((page) => {
            return { ...page, ...mdxNodeMap[page.path] };
          });
        },
        serialize: ({ path, frontmatter }) => {
          return {
            url: path,
            lastmod: frontmatter?.date,
          };
        },
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
