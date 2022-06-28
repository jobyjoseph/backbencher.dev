import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";
import RelatedArticles from "../components/relatedarticles";

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
    }
  }
`;

const PostTemplate = ({ data: { mdx: article } }) => (
  <Layout
    title={article.frontmatter.title}
    description={article.frontmatter.description}
  >
    <h1>{article.frontmatter.title}</h1>
    <div>
      <small>Last updated on {article.frontmatter.date}</small>
    </div>
    <MDXRenderer>{article.body}</MDXRenderer>
    <RelatedArticles tag={article.frontmatter.tags[0]} />
  </Layout>
);

export default PostTemplate;
