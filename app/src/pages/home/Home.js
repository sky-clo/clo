import React from "react";
import { Helmet } from "react-helmet";

import Hero from "../../components/hero/Hero";
import SearchBar from "../../components/searchBar/SearchBar";
import LocationCard from "../../components/locationCard/LocationCard";
import heroImage from "../../images/hero.png";
import styles from "./home.module.scss";
import useApi from "../../hooks/useApi";

export default function Home() {
  const { body } = useApi("/locations");

  return (
    <>
      <Helmet>
        <title>Home | Sky Clo</title>
      </Helmet>

      <article className={styles.home}>
        <Hero title="Where would you like to go?" image={heroImage} />
        <SearchBar />
        <section className={styles.locations}>
          <div className="o-container">
            <h2 className="c-heading-bravo">Popular Locations</h2>
            <div className={"o-layout " + styles.locationCards}></div>
          </div>
        </section>
      </article>
    </>
  );
}
