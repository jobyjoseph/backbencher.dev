import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";
import RelatedArticles from "../components/relatedarticles";
import * as styles from "./article.module.scss";

export const query = graphql`
  query ($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "D MMM, YYYY")
        description
        tags
      }
      body
      headings {
        depth
        value
      }
    }
  }
`;

const PostTemplate = ({ data: { mdx: article } }) => (
  <Layout
    title={article.frontmatter.title}
    description={article.frontmatter.description}
    headings={article.headings}
  >
    <h1>{article.frontmatter.title}</h1>
    <div>
      <small>Last updated on {article.frontmatter.date}</small>
    </div>
    <div className={styles.articleBody}>
      <MDXRenderer>{article.body}</MDXRenderer>
    </div>
    <div className={styles.bottomLine}>
      --- ○ ---
    </div>
  </Layout>
);

export default PostTemplate;
