import React from "react";
import { Helmet } from "react-helmet";

import Hero from "../../components/hero/Hero";
import SearchBar from "../../components/searchBar/SearchBar";
import heroImage from "../../images/location-hero.png";
import styles from "./location.module.scss";

export default function Location() {
  return (
    <>
      <Helmet>
        <title>London | Sky Clo</title>
      </Helmet>

      <article className={styles.location}>
        <Hero
          title="Dubrovnik, Croatia"
          description="Croatia has had a turbulent history but is establishing itself as an exciting destination great for all the family. Among other things, you may not be aware that the small Central European country pioneered fountain pens and invented the necktie."
          image={heroImage}
        />

        <SearchBar />

        <section className={styles.flights}>
          <div className="o-container">
            <h2 className="c-heading-bravo">Available Flights</h2>
          </div>
        </section>
      </article>
    </>
  );
}
