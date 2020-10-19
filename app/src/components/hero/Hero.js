import React from "react";

import styles from "./hero.module.scss";

export default function Hero(props) {
  return (
    <section
      className={styles.section}
      style={{
        backgroundImage: `linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.4) 17.71%,
        rgba(0, 0, 0, 0) 100%
      ),
      url("${props.image}")`,
      }}
    >
      <h1 className="c-heading-alpha">{props.title}</h1>
      {props.description && <p className="c-text-lead">{props.description}</p>}
    </section>
  );
}
