import React from "react";
import styles from "./location.module.css";

export default function Location() {
  return (
    <article className={styles.home}>
      {/* Hero */}
      <section style={{ gridArea: "hero", background: "red" }}>Hero</section>

      {/* Search */}
      <section style={{ gridArea: "search", background: "green" }}>
        Search
      </section>

      {/* Available Flights */}
      <section style={{ gridArea: "flights", background: "blue" }} />
    </article>
  );
}
