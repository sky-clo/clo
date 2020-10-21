package com.sky.clo.airport;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Collection;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Airport {
    private List<Places> Places;

    public Collection<com.sky.clo.airport.Places> getPlaces() {
        return Places;
    }

    public void setPlaces(List<com.sky.clo.airport.Places> places) {
        Places = places;
    }
}
