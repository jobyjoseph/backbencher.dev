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

const Layout = ({ children, title, description }) => {
  return (
    <>
      <SEO title={title} description={description} />
      <Header />
      <div>
        <main>
          <div className="container">
            <div className="contentArea">{children}</div>
            <div className="sidebar">
              <GoogleAd
                className="adsbygoogle"
                style={{ display: "block" }}
                slot="5217850665"
                format="auto"
                responsive="true"
              />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
