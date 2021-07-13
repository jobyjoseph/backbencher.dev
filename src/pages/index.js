import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import * as styles from "../styles/index.module.scss";

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Layout title="Backbencher.dev">
      {data.allMdx.nodes.map(({ id, excerpt, frontmatter, slug }) => (
        <div className={styles.item}>
          <Link to={`/articles/${frontmatter.slug}`}>{frontmatter.title}</Link>{" "}
          <span className={styles.date}>{frontmatter.date}</span>
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
