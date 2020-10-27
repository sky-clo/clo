import React from "react";

import Map from "../../components/map/Map";
import LinkButton from "../../components/linkButton/LinkButton";
import styles from "./CompleteTrip.module.scss";

export default function CompleteTrip() {
  return (
    <section className={styles.section}>
      <h1 className="c-heading-alpha">Woohoo!</h1>
      <h2 className="c-heading-bravo">You’re going to Dubrovnik!</h2>

      <p className="c-text-body">
        You should receive an email confirming your details. Please check your
        junk if you haven’t yet received anything
      </p>

      <Map className={styles.map} origin={undefined} destination={undefined} />

      <LinkButton>Finish</LinkButton>
    </section>
  );
}
