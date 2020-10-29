package com.sky.clo.models;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GeocodeResponseResults {
    @JsonProperty("Geometry")
    private GeocodeResponseGeometry[] geometry;

    public GeocodeResponseGeometry[] getGeometry() {
        return geometry;
    }

    public void setGeometry(GeocodeResponseGeometry[] results) {
        this.geometry = results;
    }
}
