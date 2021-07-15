import React from "react";
import * as styles from "./style.module.scss";

function Question(props) {
  return <div className={styles.questionContainer}>{props.children}</div>;
}

export default Question;
