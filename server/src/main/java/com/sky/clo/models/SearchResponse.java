package com.sky.clo.models;

import com.fasterxml.jackson.databind.JsonNode;
import com.sky.clo.weather.Weather;

public class SearchResponse {
    private FlightResponse flights;
    private Weather weather;
    private UnsplashRandomPhotoResponse photos;
    private JsonNode geocode;
    private JsonNode destGeoCode;

    public SearchResponse(FlightResponse flights, Weather weather, UnsplashRandomPhotoResponse photos, JsonNode geocode,
            JsonNode destGeoCode) {
        this.flights = flights;
        this.weather = weather;
        this.photos = photos;
        this.geocode = geocode;
        this.destGeoCode = destGeoCode;
    }

    public FlightResponse getFlights() {
        return flights;
    }

    public void setFlights(FlightResponse flights) {
        this.flights = flights;
    }

    public Weather getWeather() {
        return weather;
    }

    public void setWeather(Weather weather) {
        this.weather = weather;
    }

    public UnsplashRandomPhotoResponse getPhotos() {
        return photos;
    }

    public void setPhotos(UnsplashRandomPhotoResponse photos) {
        this.photos = photos;
    }

    public JsonNode getGeocode() {
        return geocode;
    }

    public void setGeocode(JsonNode geocode) {
        this.geocode = geocode;
    }

    public JsonNode getDestGeoCode() {
        return destGeoCode;
    }

    public void setDestGeoCode(JsonNode destGeoCode) {
        this.destGeoCode = destGeoCode;
    }
}
