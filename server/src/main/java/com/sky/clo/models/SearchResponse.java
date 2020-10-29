package com.sky.clo.models;

import com.sky.clo.weather.Weather;

public class SearchResponse {
    private FlightResponse flights;
    private Weather weather;
    private UnsplashRandomPhotoResponse photos;

    public SearchResponse(FlightResponse flights, Weather weather, UnsplashRandomPhotoResponse photos) {
        this.flights = flights;
        this.weather = weather;
        this.photos = photos;
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
}
