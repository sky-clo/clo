package com.sky.clo.models;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GeocodeResponseGeometry {
    @JsonProperty("Location")
    private GeocodeResponseLocation[] location;

    public GeocodeResponseLocation[] getLocation() {
        return location;
    }

    public void setLocation(GeocodeResponseLocation[] results) {
        this.location = results;
    }
}
