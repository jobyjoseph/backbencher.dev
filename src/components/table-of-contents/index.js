import React from "react";
import * as styles from "./toc.module.scss";
import Slugger from "github-slugger";
import { Link } from "gatsby";

function TableOfContents({ headings }) {
  const slugger = new Slugger();
  return (
    <>
      {headings?.length > 0 ? (
        <div className={styles.tocContainer}>
          <h6 className={styles.tocHeader}>Table of Contents</h6>
          {headings.map((heading, index) => (
            <div className={styles[`tab${heading.depth}`]}>
              <Link to={`#${slugger.slug(heading.value)}`}>
                {heading.value}
              </Link>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
}

export default TableOfContents;
