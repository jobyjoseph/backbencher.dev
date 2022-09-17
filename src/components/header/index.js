import { Link } from "gatsby";
import React from "react";
import logo from "./images/logo.png";
import * as styles from "./header.module.scss";

const Header = () => (
  <header>
    <div className="container">
      <Link to="/" className={styles.logoContainer}>
        <img src={logo} alt="Backbencher.dev" className={styles.logo} />
        <span className={styles.logoText}>Backbencher.dev</span>
      </Link>
      <ul className={styles.primaryMenu}>
        <li>
          <Link to="/javascript/introduction">JavaScript</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
