import React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

export const query = graphql`
  query ($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: article } }) => (
  <>
    <h1>{article.frontmatter.title}</h1>
    <p>Posted by</p>
    <MDXRenderer>{article.body}</MDXRenderer>
    <Link to="/">&larr; back to all posts</Link>
  </>
);

export default PostTemplate;
