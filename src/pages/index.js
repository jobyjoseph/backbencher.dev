import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import * as styles from "../styles/index.module.scss";

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Layout title="Home Page">
      <h1 className={styles.mainHeader}>All Articles</h1>
      {data.allMdx.nodes.map(({ id, excerpt, frontmatter, slug }) => (
        <div className={styles.item}>
          <span className={styles.date}>{frontmatter.date}</span>
          <Link to={`/articles/${frontmatter.slug}`}>
            {frontmatter.title}
          </Link>{" "}
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
