import React, { useEffect } from "react";
import {
  GoogleMap,
  Marker,
  Polyline,
  useGoogleMap,
  useJsApiLoader,
} from "@react-google-maps/api";

import config from "../../config";

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

export default function Map({ origin, destination, className }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: config.googleMapsApiKey,
  });

  return (
    isLoaded && (
      <GoogleMap
        options={{ disableDefaultUI: true }}
        zoom={3}
        center={{
          lat: -3.745,
          lng: -38.523,
        }}
        mapContainerClassName={className}
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
    )
  );
}
