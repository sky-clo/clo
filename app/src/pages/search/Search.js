import React from "react";
import { Helmet } from "react-helmet";

import Hero from "../../components/hero/Hero";
import SearchBar from "../../components/searchBar/SearchBar";
import FlightCard from "../../components/flightCard/FlightCard";
import Map from "../../components/map/Map";
import useApi from "../../hooks/useApi";
import useUrlSearchParams from "../../hooks/useUrlSearchParams";
import styles from "./Search.module.scss";

export default function Location() {
  const { from, to, inboundDate, outboundDate } = useUrlSearchParams();

  const { body } = useApi("/search", {
    urlSearchParams: { from, to, inboundDate, outboundDate },
  });

  return (
    <>
      <Helmet>
        <title>{`${body ? body.name : ""} | Sky Clo`}</title>
      </Helmet>

      <article className={styles.location}>
        <Hero
          title={body && `${body.name}, ${body.country}`}
          description={body && body.description}
          image={body && body.img_url}
        />

        <SearchBar to={body ? body.name : ""} />

        <section className={`o-container ${styles.flightsContainer}`}>
          <h2 className="c-heading-bravo">Available Flights</h2>

          <div className={styles.flights}>
            <FlightCard
              title="London Stansted to Split"
              time="6h 9m"
              price="£41"
              href="/location"
            />
            <FlightCard
              title="London Stansted to Split"
              time="6h 9m"
              price="£41"
              href="/location"
            />
            <FlightCard
              title="London Stansted to Split"
              time="6h 9m"
              price="£41"
              href="/location"
            />
          </div>

          <Map
            className={styles.map}
            origin={undefined}
            destination={undefined}
          />
        </section>
      </article>
    </>
  );
}
