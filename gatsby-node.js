exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx(filter: { frontmatter: { type: { ne: "tutorial" } } }) {
        nodes {
          frontmatter {
            title
            slug
            tags
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("failed to create posts", result.errors);
  }

  const articles = result.data.allMdx.nodes;

  // Group articles by tag
  const tags = {};
  articles.forEach((article) => {
    const tag = article.frontmatter.tags[0] || "web";
    if (tags[tag]) {
      tags[tag].push(article);
    } else {
      tags[tag] = [];
      tags[tag].push(article);
    }
  });

  // Create article pages
  articles.forEach((article) => {
    actions.createPage({
      path: `articles/${article.frontmatter.slug}`,
      component: require.resolve("./src/templates/article.js"),
      context: {
        slug: article.frontmatter.slug,
        tags,
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

  // Tutorials

  const tutorialsQueryResponse = await graphql(`
    query {
      allMdx(filter: { frontmatter: { type: { eq: "tutorial" } } }) {
        nodes {
          frontmatter {
            slug
            topic
          }
        }
      }
    }
  `);

  const tutorials = tutorialsQueryResponse.data.allMdx.nodes;

  tutorials.forEach(({ frontmatter: { slug, topic } }) => {
    actions.createPage({
      path: `${topic}/${slug}`,
      component: require.resolve("./src/templates/tutorial.js"),
      context: {
        slug,
        topic,
      },
    });
  });
};
