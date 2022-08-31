import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import * as styles from "../styles/index.module.scss";
import * as config from "../config/tags";

const IndexPage = ({ data }) => {
  const months = {
    0: "JAN",
    1: "FEB",
    2: "MAR",
    3: "APR",
    4: "MAY",
    5: "JUN",
    6: "JUL",
    7: "AUG",
    8: "SEP",
    9: "OCT",
    10: "NOV",
    11: "DEC",
  };

  const groups = [];
  let groupSlNo = 0;

  return (
    <Layout title="React.js | JavaScript | Next.js | Web Articles">
      {data.allMdx.nodes.map(({ frontmatter }, index) => {
        let showDateHeader = false;
        const date = new Date(frontmatter?.date);
        const dateHeader = `${months[date.getMonth()]} ${date.getFullYear()}`;
        if (!groups.includes(dateHeader)) {
          groups.push(dateHeader);
          showDateHeader = true;
          groupSlNo = 1;
        } else {
          groupSlNo++;
        }
        return (
          <>
            {showDateHeader && (
              <h6 className={styles.mainHeader}>{dateHeader}</h6>
            )}
            <div className={styles.item} key={index}>
              <span className={styles.slno}>{groupSlNo}.</span>
              <div>
                <Link to={`/articles/${frontmatter.slug}`}>
                  {`${frontmatter.title}`}
                </Link>
              </div>
            </div>
          </>
        );
      })}
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
