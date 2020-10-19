import React, { useEffect, useState } from "react";

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

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/locations")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  return (
    <article className={styles.home}>
      <Hero />
      <SearchBar />
      <section className={styles.locations}>
        <div className="o-container">
          <h2 className="c-heading-bravo">Popular Locations</h2>
          <div className={"o-layout " + styles.locationCards}>
            <p>{items.length}</p>
            {items.map((item, index) => (
              <LocationCard
                name={item.name}
                img_urls={item.img_urls}
                featured_in={item.featured_in[0]}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
