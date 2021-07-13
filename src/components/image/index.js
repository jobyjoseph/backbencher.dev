import React from "react";
import * as styles from "./image.module.scss";

const Image = (props) => {
  return (
    <div className={styles.wrapper} style={props.style}>
      <img src={props.src} alt={props.alt} />
      {props.caption ? (
        <div className={styles.caption}>{props.caption}</div>
      ) : null}
    </div>
  );
};

export default Image;
