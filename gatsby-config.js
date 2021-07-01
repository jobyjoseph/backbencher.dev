module.exports = {
  siteMetadata: {
    title: `My Gatsby Blog`,
    description: `This is my coding blog.`,
  },
  plugins: [
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/articles`,
        name: `articles`,
      },
    },
  ],
};
