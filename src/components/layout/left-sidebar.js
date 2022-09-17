import React from "react";
import * as styles from "./left-sidebar.module.scss";
import topics from "../../config/topics";
import { StaticQuery, graphql, Link } from "gatsby";
import DefaultLeftSidebar from "./default-left-sidebar";

export function SectionArticles({ topic, section }) {
  return (
    <StaticQuery
      query={graphql`
        query SectionArticlesQuery {
          allMdx(sort: { fields: [frontmatter___order], order: [ASC] }) {
            edges {
              node {
                id
                frontmatter {
                  title
                  slug
                  tags
                  order
                  section
                  topic
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <ul className={styles.sectionLinks}>
          {data.allMdx.edges.map((edge) => {
            if (
              edge.node.frontmatter.section === section &&
              edge.node.frontmatter.topic === topic
            ) {
              return (
                <li key={edge.node.id}>
                  <Link to={`/${topic}/${edge.node.frontmatter.slug}`}>
                    {edge.node.frontmatter.title}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      )}
    />
  );
}

export default function LeftSidebar(props) {
  const topic = topics[props.topic];
  return (
    <>
      {topic ? (
        <>
          <div className={styles.topicTitle}>
            {topic?.image && <img src={`/techlogos/${topic?.image}`} />}
            {topic?.title}
          </div>
          {topic?.sections.map((section) => {
            return (
              <div key={section.key}>
                <div className={styles.sectionTitle}>{section.title}</div>
                <SectionArticles section={section.key} topic={props.topic} />
              </div>
            );
          })}
        </>
      ) : (
        <DefaultLeftSidebar />
      )}
    </>
  );
}
