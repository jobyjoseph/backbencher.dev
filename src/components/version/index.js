import React from "react";
import * as styles from "./version.module.scss";

function Version(props) {
  return <span className={styles.versionWrapper}>ES{props.number}</span>;
}

export default Version;
