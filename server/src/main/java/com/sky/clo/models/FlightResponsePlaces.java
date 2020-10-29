package com.sky.clo.models;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FlightResponsePlaces {
    @JsonProperty("PlaceId")
    private int placeId;

    @JsonProperty("CityName")
    private String cityName;

    @JsonProperty("CountryName")
    private String countryName;

    public int getPlaceId() {
        return placeId;
    }

    public void setPlaceId(int placeId) {
        this.placeId = placeId;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    public String getCountryName() {
        return countryName;
    }

    public void setCountryName(String countryName) {
        this.countryName = countryName;
    }
}
