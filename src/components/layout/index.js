/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Header from "../header";
import Footer from "../footer";
import SEO from "../seo";
import GoogleAd from "../googlead";
import * as styles from "./layout.module.scss";
import LeftSidebar from "./left-sidebar";
import TableOfContents from "../table-of-contents";
import topics from "../../config/topics";

const Layout = ({ children, title, description, topic, headings, slug }) => {
  let updatedTitle = topic ? `${title} | ${topics[topic].title}` : title;
  return (
    <>
      <SEO title={updatedTitle} description={description} />
      <Header />

      <div className={styles.container}>
        <div className={styles.leftSidebar}>
          <LeftSidebar topic={topic} slug={slug} />
          <br />
          <br />
          <div className={styles.adContainer}>
            <GoogleAd
              style={{ display: "block" }}
              format="auto"
              slot="4442358683"
              responsive="true"
            />
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.mainContent}>{children}</div>
        </div>
        <div className={styles.rightSidebar}>
          <TableOfContents headings={headings} />
          <div className={styles.adContainer}>
            <GoogleAd
              style={{ display: "block" }}
              format="auto"
              slot="6627637198"
              responsive="true"
            />
          </div>
          <div className={styles.adContainer}>
            <GoogleAd
              style={{ display: "block" }}
              format="auto"
              slot="4442358683"
              responsive="true"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
