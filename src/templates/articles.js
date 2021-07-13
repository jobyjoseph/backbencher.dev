import React from "react";
import { graphql, Link } from "gatsby";
import * as styles from "./articles.module.scss";
import Layout from "../components/layout";

export const query = graphql`
  query GetArticles {
    allMdx {
      nodes {
        frontmatter {
          title
          slug
        }
      }
    }
  }
`;

const Articles = ({ data }) => {
  const articles = data.allMdx.nodes;
  return (
    <Layout title="All Articles">
      {articles.map((article) => {
        return (
          <div className={styles.item}>
            <Link to={`/articles/${article.frontmatter.slug}`}>
              {article.frontmatter.title}
            </Link>{" "}
            <span className={styles.date}>{article.frontmatter.date}</span>
          </div>
        );
      })}
    </Layout>
  );
};

export default Articles;
