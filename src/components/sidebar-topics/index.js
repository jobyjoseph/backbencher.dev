import React from "react";
import * as styles from "./sidebartopics.module.scss";
import { StaticQuery, graphql, Link } from "gatsby";
import topics from "../../config/topics";

function TopicTile({ topic }) {
  return (
    <StaticQuery
      query={graphql`
        query SidebarTopics {
          allMdx(filter: { frontmatter: { type: { eq: "tutorial" } } }) {
            totalCount
            edges {
              node {
                id
                frontmatter {
                  title
                  slug
                  tags
                  topic
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        let count = 0;
        data.allMdx.edges.forEach((edge) => {
          if (edge.node.frontmatter.topic == topic) {
            count++;
          }
        });
        const topicDetails = topics[topic];
        return (
          <div className={styles.container}>
            <Link to={topicDetails.landingPage}>
              <div className={`${styles.techBox}`}>
                <img
                  src={`/techlogos/${topicDetails.image}`}
                  alt="JavaScript"
                />
                <div className={styles.techDetails}>
                  <div className={styles.title}>{topicDetails.title}</div>
                  <div className={styles.count}>{count} Tutorials</div>
                </div>
              </div>
            </Link>
          </div>
        );
      }}
    />
  );
}

export default function SidebarTopics() {
  const topicKeys = Object.keys(topics);
  return (
    <div className={styles.container}>
      {topicKeys.map((topic) => (
        <TopicTile topic={topic} key={topic} />
      ))}
    </div>
  );
}
