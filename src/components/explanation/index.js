import React, { useContext } from "react";
import * as styles from "./style.module.scss";
import QuestionContext from "../questionitem/questionContext.js";

function Explanation(props) {
  const options = useContext(QuestionContext);

  return options.optionClicked ? (
    <div className={styles.explanation}>{props.children}</div>
  ) : null;
}

export default Explanation;
