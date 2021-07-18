import React from "react";
import tagsConfig from "../../config/tags";
import * as styles from "./tagbadge.module.scss";

function TagBadge({ tags }) {
  if (Array.isArray(tags)) {
    return (
      <>
        {tags.map((ele, index) => {
          return (
            <span
              style={{ backgroundColor: tagsConfig[ele].color }}
              className={styles.tag}
              key={index}
            >
              {tagsConfig[ele].title}
            </span>
          );
        })}
      </>
    );
  }
  return null;
}

export default TagBadge;
