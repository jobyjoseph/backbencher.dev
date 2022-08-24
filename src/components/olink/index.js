import React from "react";
import * as styles from "./olink.module.scss";

export default function ({
  link,
  children,
  bold,
  type = "link",
  background = "link",
}) {
  return (
    <a
      href={link}
      style={{ fontWeight: bold ? 700 : 400 }}
      className={`${styles[type]} ${styles[background]}`}
      target="_blank"
      rel="nofollow noreferrer"
    >
      {children}
    </a>
  );
}
