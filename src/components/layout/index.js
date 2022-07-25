/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { MDXProvider } from "@mdx-js/react";
import Header from "../header";
import Footer from "../footer";
import SEO from "../seo";
import InterviewQuestion, { SlNoReset } from "../interview-question";
const shortcodes = { InterviewQuestion, SlNoReset };

const Layout = ({ children, title, description }) => {
  return (
    <>
      <SEO title={title} description={description} />
      <Header />
      <div>
        <main>
          <div className="container">
            <div className="contentArea">
              <MDXProvider components={shortcodes}>{children}</MDXProvider>
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
