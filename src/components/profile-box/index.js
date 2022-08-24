import React from "react";
import * as styles from "./profile-box.module.scss";
import imgProfile from "./assets/profile.jpeg";
import imgLinkedin from "./assets/linkedin.jpg";
import Olink from "../olink";

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
      <div className={styles.role}>Web Developer</div>
      <div className={styles.buyMeACoffee}>
        <Olink
          link="https://www.buymeacoffee.com/jobyjoseph"
          type="button"
          background="buymeacoffee"
        >
          Buy Me a Coffee!
        </Olink>
      </div>
    </div>
  );
}
