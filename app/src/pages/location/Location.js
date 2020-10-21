import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {
  GoogleMap,
  Marker,
  Polyline,
  useGoogleMap,
  useJsApiLoader,
} from "@react-google-maps/api";

import Hero from "../../components/hero/Hero";
import SearchBar from "../../components/searchBar/SearchBar";
import FlightCard from "../../components/flightCard/FlightCard";
import heroImage from "../../images/location-hero.png";
import styles from "./location.module.scss";
import config from "../../config";

function LatLngBounds({ origin, destination }) {
  const map = useGoogleMap();

  useEffect(() => {
    if (map) {
      const bounds = new window.google.maps.LatLngBounds();
      bounds.extend(new window.google.maps.LatLng(origin.lat, origin.lng));
      bounds.extend(
        new window.google.maps.LatLng(destination.lat, destination.lng)
      );
      map.fitBounds(bounds);
    }
  }, [map, origin, destination]);

  return null;
}

export default function Location() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: config.googleMapsApiKey,
  });

  const [origin, setOrigin] = useState({ lat: 37.772, lng: -122.214 });
  const [destination, setDestination] = useState({
    lat: -27.467,
    lng: 153.027,
  });

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

          {isLoaded && (
            <GoogleMap
              className={styles.map}
              options={{ disableDefaultUI: true }}
            >
              <Polyline
                path={[origin, destination]}
                options={{
                  strokeColor: "#0073c5",
                  strokeWeight: 3,
                  clickable: false,
                  paths: [origin, destination],
                }}
              />
              <Marker position={origin} options={{ clickable: false }} />
              <Marker position={destination} options={{ clickable: false }} />
              <LatLngBounds origin={origin} destination={destination} />
            </GoogleMap>
          )}
        </section>
      </article>
    </>
  );
}
