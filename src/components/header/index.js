import { Link } from "gatsby";
import React from "react";
import logo from "./images/logo.png";
import * as styles from "./header.module.scss";

const Header = (props) => (
  <header>
    <div className="container">
      <Link to="/" className={styles.logoContainer}>
        <img src={logo} alt="Backbencher.dev" className={styles.logo} />
        <span className={styles.logoText}>Backbencher.dev</span>
      </Link>
    </div>
  </header>
);

export default Header;
