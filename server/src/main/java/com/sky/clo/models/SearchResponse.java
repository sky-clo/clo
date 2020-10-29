package com.sky.clo.models;

import com.sky.clo.weather.Weather;

public class SearchResponse {
    private FlightResponse flights;
    private Weather weather;
    private UnsplashRandomPhotoResponse photos;
    private GeocodeResponse geocode;

    public SearchResponse(FlightResponse flights, Weather weather, UnsplashRandomPhotoResponse photos, GeocodeResponse geocode) {
        this.flights = flights;
        this.weather = weather;
        this.photos = photos;
        this.geocode = geocode;
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

    public GeocodeResponse getGeocode() {
        return geocode;
    }

    public void setGeocode(GeocodeResponse geocode) {
        this.geocode = geocode;
    }
}
