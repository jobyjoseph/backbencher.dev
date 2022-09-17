import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";

export const query = graphql`
  query ($slug: String!, $topic: String!) {
    mdx(frontmatter: { slug: { eq: $slug }, topic: { eq: $topic } }) {
      frontmatter {
        title
        slug
        date(formatString: "D MMM, YYYY")
        description
        topic
      }
      body
      headings {
        depth
        value
      }
    }
  }
`;

const TutorialTemplate = ({ data: { mdx: article } }) => (
  <Layout
    title={article.frontmatter.title}
    description={article.frontmatter.description}
    topic={article.frontmatter.topic}
    headings={article.headings}
  >
    <h1>{article.frontmatter.title}</h1>
    <MDXRenderer>{article.body}</MDXRenderer>
    <div>
      <small>Last updated on {article.frontmatter.date}</small>
    </div>
  </Layout>
);

export default TutorialTemplate;
