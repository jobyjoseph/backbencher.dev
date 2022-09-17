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
import * as styles from "./layout.module.scss";
import LeftSidebar from "./left-sidebar";
import TableOfContents from "../table-of-contents";
import topics from "../../config/topics";

const Layout = ({ children, title, description, topic, headings }) => {
  let updatedTitle = topic ? `${title} | ${topics[topic].title}` : title;
  return (
    <>
      <SEO title={updatedTitle} description={description} />
      <Header />

      <div className={styles.container}>
        <div className={styles.leftSidebar}>
          <LeftSidebar topic={topic} />
          <br />
          <br />
          <img src="https://www.gourmetads.com/wp-content/uploads/2019/05/fast-food-ads-mcdonalds-300x600.jpg" />
        </div>
        <div className={styles.main}>
          <div className={styles.mainContent}>{children}</div>
        </div>
        <div className={styles.rightSidebar}>
          <TableOfContents headings={headings} />
          <img src="https://www.gourmetads.com/wp-content/uploads/2019/05/fast-food-ads-mcdonalds-300x600.jpg" />
          <br />
          <br />
          <img src="https://blockchain-expo.com/northamerica/wp-content/uploads/2022/06/Ad-Banners-300x600-Block-NA-2-1.png" />
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
