import React from "react";
import * as styles from "./relatedarticles.module.scss";
import { StaticQuery, graphql, Link } from "gatsby";

export default function RelatedArticles({ tag }) {
  return (
    <StaticQuery
      query={graphql`
        query RelatedArticlesQuery {
          allMdx(sort: { fields: [frontmatter___date], order: [ASC] }) {
            totalCount
            edges {
              node {
                id
                frontmatter {
                  title
                  slug
                  tags
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <div>
          <h3 className={styles.header}>Related Articles</h3>
          <ul className={styles.container}>
            {data.allMdx.edges.map((edge) => {
              if (edge.node.frontmatter.tags[0] === tag) {
                return (
                  <li key={edge.node.id}>
                    <Link to={`/articles/${edge.node.frontmatter.slug}`}>
                      {edge.node.frontmatter.title}
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      )}
    />
  );
}
