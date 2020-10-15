import React from "react";
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
    <React.Fragment>
      <article className={styles.home}>
        {/* Hero */}
        <section style={{ gridArea: "hero", background: "red" }}>Hero</section>

        {/* Search */}
        <section style={{ gridArea: "search", background: "green" }}>
          Search
        </section>

        {/* Popular Locations */}
        <section style={{ gridArea: "locations", background: "blue" }}>
          <h2>Popular Locations</h2>
          {/* Location cards grid */}
          {/* Location cards */}
        </section>
      </article>
      <LocationSection locations={locations} />
    </React.Fragment>
  );
}

function LocationSection({ locations }) {
  return (
    <section className="o-layout">
      {locations.map((location) => (
        <LocationCard location={location}></LocationCard>
      ))}
    </section>
  );
}
