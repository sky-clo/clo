package com.sky.clo;

import com.sky.clo.models.*;
import com.sky.clo.services.FlightService;
import com.sky.clo.services.UnsplashService;
import com.sky.clo.services.WeatherService;
import com.sky.clo.weather.Weather;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping(path = "/locations")
public class LocationController {
    @Autowired
    UnsplashService unsplashService;

    @Autowired
    FlightService flightService;

    @Autowired
    WeatherService weatherService;

    private final Location[] popularLocations = {
        new Location("London", "United Kingdom", "LOND-sky"),
        new Location("Paris", "France", "PARI-sky"),
        new Location("Tokyo", "Japan", "JP-sky"),
        new Location("Rome", "Italy", "IT-sky"),
        new Location("Barcelona", "Spain", "ES-sky"),
        new Location("New York City", "New York", "NYCA-sky"),
        new Location("Sydney", "Australia", "AU-sky"),
        new Location("Yosemite", "California", "LAXA-sky"),
        new Location("Santorini", "Greece", "GR-sky"),
    };

    @PostConstruct
    private void generateLocationPhotos() {
        try {
            for (Location location : popularLocations) {
                CompletableFuture<UnsplashRandomPhotoResponse> response = unsplashService.randomPhoto(location.getName());
                UnsplashRandomPhotoResponse photo = response.get();
                location.setImgUrl(photo.getUrls().getFull());
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /** Returns popular locations */
    @GetMapping()
    public @ResponseBody Location[] getPopularLocations() {
        return popularLocations;
    }

    /** Search for a location */
    @GetMapping(path="/search")
    public SearchResponse search(@RequestParam String from, @RequestParam String to, @RequestParam String outboundDate, @RequestParam(required = false) String inboundDate) throws ExecutionException, InterruptedException {
        CompletableFuture<FlightResponse> flightsResponse = flightService.getFlights(from, to, outboundDate, inboundDate);
        FlightResponse flights = flightsResponse.get();

        int originId = flights.getQuotes()[0].getOutboundLeg().getOriginId();
        String cityName = null;

        for (FlightResponsePlaces place : flights.getPlaces()) {
            if (place.getPlaceId() == originId) {
                cityName = place.getCityName();
                break;
            }
        }

        CompletableFuture<Weather> weatherResponse = weatherService.search(cityName);
        CompletableFuture<UnsplashRandomPhotoResponse> photoResponse = unsplashService.randomPhoto(cityName);
        CompletableFuture.allOf(weatherResponse, photoResponse);

        return new SearchResponse(flights, weatherResponse.get(), photoResponse.get());
    }
}