import React from "react";
import { graphql, Link } from "gatsby";
import * as styles from "./articles.module.scss";
import Layout from "../components/layout";
import Pagination from "../components/pagination";
import TagBadge from "../components/tagbadge";

export const query = graphql`
  query GetArticles($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        frontmatter {
          title
          slug
          date(formatString: "D MMM, YYYY")
          tags
        }
      }
    }
  }
`;

const Articles = ({ data, pageContext }) => {
  const articles = data.allMdx.nodes;
  const { numPages, currentPage } = pageContext;
  const linkArray = new Array();
  for (let i = 0; i < numPages; i++) {
    linkArray.push({
      path: i === 0 ? "/articles" : `/articles/${i + 1}`,
      text: i + 1,
    });
  }
  return (
    <Layout
      title={currentPage === 1 ? `Articles` : `Articles | Page ${currentPage}`}
    >
      {articles.map((article, index) => {
        return (
          <div className={styles.item} key={index}>
            <div className={styles.linkContainer}>
              <Link to={`/articles/${article.frontmatter.slug}`}>
                {article.frontmatter.title}
              </Link>{" "}
            </div>
            <div className={styles.tagContainer}>
              <span className={styles.date}>{article.frontmatter.date}</span>
              <TagBadge tags={article.frontmatter.tags} />
            </div>
          </div>
        );
      })}
      <Pagination links={linkArray} currentPage={currentPage} />
    </Layout>
  );
};

export default Articles;
