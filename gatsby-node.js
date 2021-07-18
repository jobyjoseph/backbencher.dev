exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("failed to create posts", result.errors);
  }

  const articles = result.data.allMdx.nodes;

  // Create article pages
  articles.forEach((article) => {
    actions.createPage({
      path: `articles/${article.frontmatter.slug}`,
      component: require.resolve("./src/templates/article.js"),
      context: {
        slug: article.frontmatter.slug,
      },
    });
  });

  // Create articles listing pages
  const postsPerPage = 30;
  const numPages = Math.ceil(articles.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/articles` : `/articles/${i + 1}`,
      component: require.resolve("./src/templates/articles.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};
