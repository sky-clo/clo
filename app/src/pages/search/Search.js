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
  for (const place of places) {
    if (place.PlaceId === key) {
      return place;
    }
  }
}

export default function Search() {
  const urlSearchParams = useUrlSearchParams();
  const { body } = useApi("/search", { urlSearchParams });

  const place = body?.Places?.[0];
  return (
    <>
      <Helmet>
        <title>{`${place?.CityName || ""} | Sky Clo`}</title>
      </Helmet>

      <article className={styles.location}>
        <Hero title={place ? `${place.CityName}, ${place.CountryName}` : ""} />

        <SearchBar to={body ? body.name : ""} />

        <section className={`o-container ${styles.flightsContainer}`}>
          <h2 className="c-heading-bravo">Available Flights</h2>

          <div className={styles.flights}>
            {body?.Quotes?.slice(0, 5)
              .sort(function (a, b) {
                return a.MinPrice - b.MinPrice;
              })
              .map((item, index) => {
                return (
                  <FlightCard
                    title={
                      findLocation(body.Places, item.OutboundLeg.OriginId)
                        .Name +
                      " to " +
                      findLocation(body.Places, item.OutboundLeg.DestinationId)
                        .Name
                    }
                    time=""
                    price={`£${item.MinPrice}`}
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
