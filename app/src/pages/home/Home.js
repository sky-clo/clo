import React from "react";

import Hero from "../../components/hero/Hero";
import SearchBar from "../../SearchBar";
import styles from "./home.module.scss";
import LocationCard from "../../LocationCard";

class Location {
  constructor(locationTitle, locationDisc) {
    this.locationTitle = locationTitle;
    this.locationDisc = locationDisc;
  }
}

export default function Home() {
  const locations = [];
  for (var i = 0; i < 3; i++) {
    locations.push(new Location("TEST", "TESTING"));
  }

  return (
    <article className={styles.home}>
      <Hero />

      <SearchBar />

      {/* Popular Locations */}
      <section style={{ gridArea: "locations" }}>
        <h2>Popular Locations</h2>

        <LocationSection locations={locations} />
      </section>
    </article>
  );
}

function LocationSection({ locations }) {
  return (
    <section className="o-container">
      <article className="o-layout">
        {locations.map((location) => (
          <LocationCard location={location}></LocationCard>
        ))}
      </article>
    </section>
  );
}
