import React, { useState } from "react";
import * as styles from "./answer.module.scss";

function Answer(props) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className={styles.answerBox}>
      <button
        className={styles.answerButton}
        onClick={() => setShowAnswer(!showAnswer)}
      >
        {showAnswer ? "Hide Answer" : "View Answer"}
      </button>
      {showAnswer ? <p>{props.children}</p> : null}
    </div>
  );
}

export default Answer;
