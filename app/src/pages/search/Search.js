import React from "react";
import { Helmet } from "react-helmet";

import Hero from "../../components/hero/Hero";
import SearchBar from "../../components/searchBar/SearchBar";
import FlightCard from "../../components/flightCard/FlightCard";
import Map from "../../components/map/Map";
import useApi from "../../hooks/useApi";
import useUrlSearchParams from "../../hooks/useUrlSearchParams";
import styles from "./Search.module.scss";

function findLocation(places, key) {
  for (var i = 0; i < places.length; i++) {
    if (places[i]["PlaceId"] == key) {
      return places[i];
    }
  }
}

export default function Search() {
  const urlSearchParams = useUrlSearchParams();
  const { body } = useApi("/search", { urlSearchParams });

  return (
    <>
      <Helmet>
        <title>{`${body ? body.name : ""} | Sky Clo`}</title>
      </Helmet>

      <article className={styles.location}>
        <Hero
          title={
            body &&
            body["Places"] &&
            `${body["Places"][0]["CityName"]}, ${body["Places"][0]["CountryName"]}`
          }
        />

        <SearchBar to={body ? body.name : ""} />

        <section className={`o-container ${styles.flightsContainer}`}>
          <h2 className="c-heading-bravo">Available Flights</h2>

          <div className={styles.flights}>
            {body &&
              body["Quotes"] &&
              body["Quotes"]
                .sort(function (a, b) {
                  return a["MinPrice"] - b["MinPrice"];
                })
                .map((item, index) => {
                  return (
                    <FlightCard
                      title={
                        findLocation(
                          body["Places"],
                          item["OutboundLeg"]["OriginId"]
                        )["Name"] +
                        " to " +
                        findLocation(
                          body["Places"],
                          item["OutboundLeg"]["DestinationId"]
                        )["Name"]
                      }
                      time=""
                      price={`£${item["MinPrice"]}`}
                      href="/location"
                    />
                  );
                })}
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
