import React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";

export const query = graphql`
  query ($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "D MMM, YYYY")
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: article } }) => (
  <Layout title={article.frontmatter.title}>
    <h1>{article.frontmatter.title}</h1>
    <div>
      <small>Published on {article.frontmatter.date}</small>
    </div>
    <MDXRenderer>{article.body}</MDXRenderer>
  </Layout>
);

export default PostTemplate;
