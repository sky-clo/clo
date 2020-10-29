package com.sky.clo.models;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GeocodeResponseLocation {
    @JsonProperty("lat")
    private float lat;

    public float getLat() {
        return lat;
    }

    public void setLat(float results) {
        this.lat = results;
    }

    @JsonProperty("lng")
    private float lng;

    public float getLng() {
        return lng;
    }

    public void setLng(float lng) {
        this.lng = lng;
    }

}
