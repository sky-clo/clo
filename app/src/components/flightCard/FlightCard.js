import React from "react";
import { Link } from "react-router-dom";

import styles from "./FlightCard.module.scss";

export default function FlightCard(props) {
  return (
    <Link to={props.href} className={styles.flightCard}>
      <p className={styles.title}>{props.title}</p>
      <p className={styles.price}>{props.price}</p>
    </Link>
  );
}
