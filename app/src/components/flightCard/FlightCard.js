import React from "react";

import styles from "./FlightCard.module.scss";

export default function FlightCard(props) {
  return (
    <a href={props.href} className={styles.flightCard}>
      <p className={styles.title}>{props.title}</p>
      <p className={styles.price}>{props.price}</p>
    </a>
  );
}
