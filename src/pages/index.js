import React from "react";
import { Link, graphql } from "gatsby";

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <>
      {data.allMdx.nodes.map(({ id, excerpt, frontmatter, slug }) => (
        <div>
          <Link to={`/${slug}`}>
            <h1>{frontmatter.title}</h1>
          </Link>
          <div>
            <small>{frontmatter.date}</small>
          </div>
          <p>{excerpt}</p>
        </div>
      ))}
    </>
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
          date(formatString: "YYYY MMMM Do")
        }
        slug
      }
    }
  }
`;

export default IndexPage;
