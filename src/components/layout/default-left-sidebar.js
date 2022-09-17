import React from "react";
import SidebarTopics from "../sidebar-topics";
import * as styles from "./default-left-sidebar.module.scss";

export default function DefaultLeftSidebar() {
  return (
    <div className={styles.container}>
      <SidebarTopics />
      <div className={styles.topArticles}>
        <h3>Top Articles</h3>
        <ul>
          <li>
            <a href="/articles/html-boilerplate-code-visual-studio-code">
              How To Easily Write HTML5 Boilerplate Code In Visual Studio Code
            </a>
          </li>
          <li>
            <a href="/articles/react-hooks-interview-questions">
              React Hooks Interview Questions
            </a>
          </li>
          <li>
            <a href="/articles/solved-error-0909006c-pem-routines-get-name-no-start-line">
              Solved: error:0909006C:PEM routines:get_name:no start line
            </a>
          </li>
          <li>
            <a href="/articles/solved-unable-to-verify-first-certificate-axios-request">
              Solved: Unable to Verify the First Certificate in Axios Request
            </a>
          </li>
          <li>
            <a href="/articles/remove-material-ui-appbar-box-shadow">
              Remove Material UI AppBar Box Shadow
            </a>
          </li>
          <li>
            <a href="/articles/typescript-solved-cannot-redeclare-block-scoped-variable-name">
              SOLVED TypeScript Cannot Redeclare Block Scoped Variable Name
            </a>
          </li>
          <li>
            <a href="/articles/make-material-ui-textfield-as-required-field">
              Make Material UI TextField As Required Field
            </a>
          </li>
          <li>
            <a href="/articles/understanding-source-maps-in-webpack">
              Understanding Source Maps In Webpack
            </a>
          </li>
          <li>
            <a href="/articles/deploy-react-app-amazon-s3-github-actions">
              Deploy React App to Amazon S3 Using Github Actions
            </a>
          </li>
          <li>
            <a href="/articles/useref-react-hook">useRef() React Hook</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
