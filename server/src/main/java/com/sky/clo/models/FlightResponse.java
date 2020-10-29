package com.sky.clo.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;

@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class FlightResponse {
    @JsonProperty("Places")
    private FlightResponsePlaces[] places;

    @JsonProperty("Quotes")
    private FlightResponseQuotes[] quotes;

    public FlightResponsePlaces[] getPlaces() {
        return places;
    }

    public void setPlaces(FlightResponsePlaces[] places) {
        this.places = places;
    }

    public FlightResponseQuotes[] getQuotes() {
        return quotes;
    }

    public void setQuotes(FlightResponseQuotes[] quotes) {
        this.quotes = quotes;
    }
}

