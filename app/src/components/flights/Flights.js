import useApi from "../../hooks/useApi";
import React, { useEffect, useState } from "react";
import FlightCard from "../flightCard/FlightCard";
import styles from "./location.module.scss";

function findLocation(places, key) {
  for (var i = 0; i < places.length; i++) {
    if (places[i]["PlaceId"] == key) {
      return places[i];
    }
  }
}

export default function (props) {
  const { body: quotes, status: test } = useApi(
    "/flights?originlocation=" +
      props.originLocation +
      "&destlocation=" +
      props.destinationLocation +
      "&locale=en_GB&country=GB&currency=GBP&outboundpartialdate=2020-10-30"
  );
  return (
    <div className={styles.flights}>
      {quotes &&
        quotes["Quotes"] &&
        quotes["Quotes"]
          .sort(function (a, b) {
            return a["MinPrice"] - b["MinPrice"];
          })
          .map((item, index) => {
            return (
              <FlightCard
                title={
                  findLocation(
                    quotes["Places"],
                    item["OutboundLeg"]["OriginId"]
                  )["Name"] +
                  " to " +
                  findLocation(
                    quotes["Places"],
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
  );
}
