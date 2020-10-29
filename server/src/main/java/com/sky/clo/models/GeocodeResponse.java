package com.sky.clo.models;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GeocodeResponse {
    @JsonProperty("Results")
    private GeocodeResponseResults[] results;

    public GeocodeResponseResults[] getResults() {
        return results;
    }

    public void setResults(GeocodeResponseResults[] results) {
        this.results = results;
    }
}
