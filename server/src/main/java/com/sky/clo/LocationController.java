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
        new Location("London", "United Kingdom"),
            new Location("Paris", "France"),
            new Location("Tokyo", "Japan"),
            new Location("Rome", "Italy"),
            new Location("Barcelona", "Spain"),
            new Location("New York City", "New York"),
            new Location("Sydney", "Australia"),
            new Location("Yosemite", "California"),
            new Location("Santorini", "Greece"),
    };

//    @PostConstruct
//    private void generateLocationPhotos() {
//        try {
//            for (Location location : popularLocations) {
//                CompletableFuture<UnsplashRandomPhotoResponse> response = unsplashService.randomPhoto(location.getName());
//                UnsplashRandomPhotoResponse photo = response.get();
//                location.setImgUrl(photo.getUrls().getFull());
//            }
//
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//    }

    /** Returns popular locations */
    @GetMapping
    public @ResponseBody FlightResponse getPopularLocations() throws ExecutionException, InterruptedException {
        CompletableFuture<FlightResponse> x = flightService.getFlights(
                "ROME-sky",
                "STN-sky",
                        "2020-11-08",
                "2020-12-30"
        );
        FlightResponse y = x.get();
        return y;
    }

    /** Search for a location */
    @GetMapping(path="/search")
    public SearchResponse search(@RequestParam String from, @RequestParam String to, @RequestParam String outboundDate, @RequestParam(required = false) String inboundDate) throws ExecutionException, InterruptedException {
        System.out.println(111);
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

        SearchResponse x = new SearchResponse(flights, weatherResponse.get(), photoResponse.get());
        return x;
    }
}