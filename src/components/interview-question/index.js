import React, { useState, useEffect } from "react";
import * as styles from "./interview-question.module.scss";
import { Link } from "gatsby";

export function SlNoReset() {
  useEffect(function () {
    window.slno = 0;
  }, []);

  return null;
}

function InterviewQuestion({ link, children }) {
  const [slno, setSlno] = useState(0);

  useEffect(function () {
    let nextSlno = window.slno ?? 0;
    window.slno = ++nextSlno;
    setSlno(window.slno);
  }, []);

  return (
    <div className={styles.questionContainer}>
      <div className={styles.slno}>{slno}</div>
      {children}
      <div>
        <Link to={link} className={styles.answerLink}>
          View Answer
        </Link>
      </div>
    </div>
  );
}

export default InterviewQuestion;
