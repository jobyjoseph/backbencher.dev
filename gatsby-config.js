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
                topic
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
              frontmatter: { slug, topic },
            } = node;
            if (topic) {
              acc[`/${topic}/${slug}`] = node;
            } else {
              acc[`/articles/${slug}`] = node;
            }

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
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              className: `header-internal-link`,
              removeAccents: true,
              isIconAfterHeader: true,
            },
          },
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
        trackingIds: ["G-LNSS55TZW3"],
        pluginConfig: {
          head: false,
        },
      },
    },
  ],
};
