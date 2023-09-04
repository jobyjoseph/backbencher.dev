import React from "react";
import * as styles from "./profile-box.module.scss";
import imgProfile from "./assets/profile.jpeg";
import imgLinkedin from "./assets/linkedin.jpg";

export default function () {
  return (
    <div className={styles.profileBoxContainer}>
      <img src={imgProfile} className={styles.profileImage} alt="Joby Joseph" />
      <div>
        <a
          href="https://www.linkedin.com/in/reachjoby/"
          className={styles.profileLink}
          target="_blank"
          rel="nofollow noreferrer"
        >
          <img src={imgLinkedin} alt="Linkedin" />
          Joby Joseph
        </a>
      </div>
      <div className={styles.role}>Web Architect</div>
    </div>
  );
}
