import React from "react";

import Hero from "../../components/hero/Hero";
import SearchBar from "../../components/searchBar/SearchBar";
import LocationCard from "../../components/locationCard/LocationCard";
import styles from "./home.module.scss";

class Location {
  constructor(locationTitle, locationDisc) {
    this.locationTitle = locationTitle;
    this.locationDisc = locationDisc;
  }
}

export default function Home() {
  const locations = [];
  for (var i = 0; i < 12; i++) {
    locations.push(new Location("TEST", "TESTING"));
  }

  return (
    <article className={styles.home}>
      <Hero />
      <SearchBar />
      <section className="locations">
        <div className="o-container">
          <h2 className="c-heading-bravo">Popular Locations</h2>
          <div className={"o-layout " + styles.locationCards}>
            {locations.map((location, index) => (
              <LocationCard location={location} key={index} />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
