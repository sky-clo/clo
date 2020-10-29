import React from "react";

import Map from "../../components/map/Map";
import LinkButton from "../../components/linkButton/LinkButton";
import styles from "./CompleteTrip.module.scss";
import { useEffect } from "react";
import useApi from "../../hooks/useApi";

export default function CompleteTrip() {
  const { status } = useApi("/trip", { method: "post" });

  return (
    <section className={styles.section}>
      {status === 200 && (
        <>
          <h1 className="c-heading-alpha">Woohoo!</h1>
          <h2 className="c-heading-bravo">You’re going to Dubrovnik!</h2>

          <p className="c-text-body">
            You should receive an email confirming your details. Please check
            your junk if you haven’t yet received anything
          </p>

          <LinkButton href="/" data-test="CompleteTrip-finish">
            Finish
          </LinkButton>
        </>
      )}
    </section>
  );
}
