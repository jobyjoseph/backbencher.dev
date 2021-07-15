import React, { useState } from "react";
import * as styles from "./style.module.scss";
import QuestionContext from "./questionContext.js";

function QuestionItem(props) {
  const [optionClicked, setOptionClicked] = useState(false);

  const options = {
    setOptionClicked,
    optionClicked,
  };

  return (
    <QuestionContext.Provider value={options}>
      <div className={styles.questionItemContainer}>{props.children}</div>
    </QuestionContext.Provider>
  );
}

export default QuestionItem;
