package com.sky.clo.models;

import com.fasterxml.jackson.annotation.JsonProperty;

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

