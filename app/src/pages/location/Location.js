import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import {
  GoogleMap,
  Marker,
  Polyline,
  useGoogleMap,
  useJsApiLoader,
} from "@react-google-maps/api";

import Flights from "../../components/flights/Flights";

import useApi from "../../hooks/useApi";
import config from "../../config";
import Hero from "../../components/hero/Hero";
import SearchBar from "../../components/searchBar/SearchBar";
import styles from "./location.module.scss";

function LatLngBounds({ origin, destination }) {
  const map = useGoogleMap();

  useEffect(() => {
    if (map && origin && destination) {
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
  const { locationName } = useParams();
  const { body } = useApi("/locations/" + locationName);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: config.googleMapsApiKey,
  });

  const { body: location } = useApi("/airports?query=" + locationName);
  const { body: destinationLocation } = useApi("/airports?query=SPU");

  // Points for Google Maps
  const [origin, setOrigin] = useState();
  const [destination, setDestination] = useState();
  const [currentLocation, setCurrentLocation] = useState();

  // Once fetched location details from our API, set the google Maps destination point
  useEffect(() => {
    if (body) {
      setDestination({ lat: body.lat, lng: body.lng });
    }
  }, [body]);

  return (
    <>
      <Helmet>
        <title> {`${body ? body.name : ""} | Sky Clo`} </title>
      </Helmet>

      <article className={styles.location}>
        <Hero
          title={body && `${body.name}, ${body.country}`}
          description={body && body.description}
          image={body && body.img_url}
        />

        <SearchBar />

        <section className={`o-container ${styles.flightsContainer}`}>
          <h2 className="c-heading-bravo"> Available Flights </h2>

          <Flights
            originLocation={location ? location["Places"][0]["PlaceId"] : null}
            destinationLocation={
              destinationLocation
                ? destinationLocation["Places"][0]["PlaceId"]
                : null
            }
          />

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
