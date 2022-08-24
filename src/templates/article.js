import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";
import RelatedArticles from "../components/relatedarticles";
import * as styles from "./article.module.scss";
import GoogleAd from "../components/googlead";
import Olink from "../components/olink";

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
    <div className={styles.buymeacoffee}>
      <Olink
        link="https://www.buymeacoffee.com/jobyjoseph"
        type="button"
        background="buymeacoffee"
      >
        Buy Me a Coffee!
      </Olink>
    </div>
    <MDXRenderer>{article.body}</MDXRenderer>
    <div className={styles.adContainer}>
      <GoogleAd
        style={{ display: "block", textAlign: "center" }}
        layout="in-article"
        format="fluid"
        slot="9034656808"
      />
    </div>
    <RelatedArticles tag={article.frontmatter.tags[0]} />
  </Layout>
);

export default PostTemplate;
