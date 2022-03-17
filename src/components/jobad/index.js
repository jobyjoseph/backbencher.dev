import React from "react";
import * as styles from "./jobad.module.scss";

const JobAd = (props) => {
  return (
    <div className={styles.wrapper}>
      <a
        href="https://www.linkedin.com/company/litmus7inc/"
        target="_blank"
        rel="nofollow"
      >
        Litmus7
      </a>{" "}
      is hiring frontend engineers. You can send your resume to{" "}
      <a href="mailto:joby.joseph@litmus7.com">joby.joseph@litmus7.com</a>, if
      you are interested.
      <br />
      PS: I am not looking for a job change :). Please do not spam.
    </div>
  );
};

export default JobAd;
