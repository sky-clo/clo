package com.sky.clo;

import com.fasterxml.jackson.databind.JsonNode;
import com.sky.clo.models.*;
import com.sky.clo.services.FlightService;
import com.sky.clo.services.GoogleMapsService;
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

    @Autowired
    GoogleMapsService googleMapsService;

    private final Location[] popularLocations = {
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
                CompletableFuture<UnsplashRandomPhotoResponse> response = unsplashService
                        .randomPhoto(location.getName());
                UnsplashRandomPhotoResponse photo = response.get();
                if (photo != null) {
                    location.setImgUrl(photo.getUrls().getFull());
                }
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
    @GetMapping(path = "/search")
    public SearchResponse search(@RequestParam String from, @RequestParam String to, @RequestParam String outboundDate,
            @RequestParam(required = false) String inboundDate) throws ExecutionException, InterruptedException {
        CompletableFuture<FlightResponse> flightsResponse = flightService.getFlights(from, to, outboundDate,
                inboundDate);
        FlightResponse flights = flightsResponse.get();

        int originId = flights.getQuotes()[0].getOutboundLeg().getOriginId();
        int destinationId = flights.getQuotes()[0].getOutboundLeg().getDestinationId();
        String cityName = null;
        String countryName = null;
        String destinationCityName = null;
        String destinationCountryName = null;
        for (FlightResponsePlaces place : flights.getPlaces()) {
            if (place.getPlaceId() == originId) {
                cityName = place.getCityName();
                countryName = place.getCountryName();
                if (destinationCityName != null)
                    break;
            }
            if (place.getPlaceId() == destinationId) {
                destinationCityName = place.getCityName();
                destinationCountryName = place.getCountryName();
                if (cityName != null)
                    break;

            }
        }

        CompletableFuture<Weather> weatherResponse = weatherService.search(cityName);
        CompletableFuture<UnsplashRandomPhotoResponse> photoResponse = unsplashService.randomPhoto(cityName);
        CompletableFuture<JsonNode> geocodeResponse = googleMapsService.geocode(cityName + ", " + countryName);
        CompletableFuture<JsonNode> geocodeOtherResponse = googleMapsService
                .geocode(destinationCityName + ", " + destinationCountryName);
        CompletableFuture.allOf(weatherResponse, photoResponse, geocodeResponse, geocodeOtherResponse);

        return new SearchResponse(flights, weatherResponse.get(), photoResponse.get(), geocodeResponse.get(),
                geocodeOtherResponse.get());
    }
}