import React from "react";
import SearchBar from "../../SearchBar";
import styles from "./home.module.scss";

export default function Home() {
  const locations = [];

  return (
    <article className={styles.home}>
      {/* Hero */}
      <section style={{ gridArea: "hero", background: "red" }}>Hero</section>

      {/* Search */}
      <section style={{ gridArea: "search", background: "green" }}>
        <SearchBar />
      </section>

      {/* Popular Locations */}
      <section style={{ gridArea: "locations", background: "blue" }}>
        <h2>Popular Locations</h2>

        {/* Location cards grid */}
        <div>
          {/* Location cards */}
          {locations.map((location) => (
            <div>Card</div>
          ))}
        </div>
      </section>
    </article>
  );
}
