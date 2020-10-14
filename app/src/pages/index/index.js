import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

// CSS modules allow use to import classes using JSON syntax rather than a long string of classes, which can be useful
// for conditional rendering (e.g. this.props.primary === true ? styles.primary : styles.secondary). You can use dot-notation (e.g. styles.app_header)
// or array-notation (e.g. styles['app_header']) but *must* use array-notation if your class uses a hyphen (e.g. styles['app-header'])
// More information will be available in the README.md. CSS-Module documentation exists here: https://github.com/css-modules/css-modules

function IndexPage() {
  return (
    <div className={styles.app}>
      <header className={styles.app_header}>
        <section className={styles.link_container}>
          <a
            className="c-btn c-btn--primary"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Link to="/demo" className="c-btn c-btn--primary">
            View Demo Page
          </Link>
        </section>
      </header>
    </div>
  );
}

export default IndexPage;
