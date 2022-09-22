import React from "react";
import * as styles from "./left-sidebar.module.scss";
import topics from "../../config/topics";
import { StaticQuery, graphql, Link } from "gatsby";
import DefaultLeftSidebar from "./default-left-sidebar";

export function SectionArticles({ topic, section, slug }) {
  return (
    <StaticQuery
      query={graphql`
        query SectionArticlesQuery {
          allMdx(filter: { frontmatter: { type: { eq: "tutorial" } } }) {
            edges {
              node {
                id
                frontmatter {
                  title
                  shortTitle
                  slug
                  tags
                  sortorder
                  section
                  topic
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        data.allMdx.edges.sort((a, b) => {
          if (a.node.frontmatter.sortorder > b.node.frontmatter.sortorder)
            return 1;
          if (a.node.frontmatter.sortorder < b.node.frontmatter.sortorder)
            return -1;
          return 0;
        });
        return (
          <ul className={styles.sectionLinks}>
            {data.allMdx.edges.map((edge) => {
              if (
                edge.node.frontmatter.section === section &&
                edge.node.frontmatter.topic === topic
              ) {
                return (
                  <li
                    key={edge.node.id}
                    style={{
                      fontWeight:
                        edge.node.frontmatter.slug === slug ? "700" : "400",
                    }}
                  >
                    <Link to={`/${topic}/${edge.node.frontmatter.slug}`}>
                      {edge.node.frontmatter.shortTitle ||
                        edge.node.frontmatter.title}
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        );
      }}
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
                <SectionArticles
                  section={section.key}
                  topic={props.topic}
                  slug={props.slug}
                />
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
