import React from "react";
import { Link } from "gatsby";
import * as styles from "./pagination.module.scss";

function Pagination({ currentPage, links }) {
  return (
    <div className={styles.pagination}>
      {links.map((ele, index) => {
        if (index + 1 === currentPage) {
          return (
            <span className={`${styles.link} ${styles.currentPage}`}>
              {ele.text}
            </span>
          );
        } else {
          return (
            <Link to={ele.path} className={styles.link}>
              <a>{ele.text}</a>
            </Link>
          );
        }
      })}
    </div>
  );
}

export default Pagination;
