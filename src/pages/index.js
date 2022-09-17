import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import * as styles from "../styles/index.module.scss";

const IndexPage = ({ data }) => {
  return (
    <Layout title="React.js | JavaScript | Next.js | Web Articles">
      <h1 className={styles.homeTitle}>Latest Articles</h1>
      {data.allMdx.nodes.map(({ frontmatter }, index) => {
        return (
          <>
            <div className={styles.item} key={index}>
              <div>
                <Link to={`/articles/${frontmatter.slug}`}>
                  {`${frontmatter.title}`}
                </Link>{" "}
              </div>
              <div className={styles.date}>{frontmatter.date}</div>
            </div>
          </>
        );
      })}
    </Layout>
  );
};

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      filter: { frontmatter: { type: { ne: "tutorial" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 30
    ) {
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
