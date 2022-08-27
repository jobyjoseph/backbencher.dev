import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import * as styles from "../styles/index.module.scss";

const IndexPage = ({ data }) => {
  const articleCount = data.allMdx.nodes.length;
  return (
    <Layout title="React.js | JavaScript | Next.js | Web Articles">
      <h1 className={styles.mainHeader}>All Articles</h1>
      {data.allMdx.nodes.map(({ frontmatter }, index) => (
        <div className={styles.item}>
          <Link to={`/articles/${frontmatter.slug}`}>
            {`${frontmatter.title}`}
          </Link>
        </div>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "D MMM, YY")
          slug
        }
      }
    }
  }
`;

export default IndexPage;
