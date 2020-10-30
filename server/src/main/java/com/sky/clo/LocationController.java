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
            new Location("Paris", "France", "PARI-sky", "https://images.unsplash.com/photo-1502588763795-b8dbc5fb7e67?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE3ODU3MH0"),
            new Location("Tokyo", "Japan", "JP-sky", "https://images.unsplash.com/photo-1587908377328-c7f28bbcc37d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE3ODU3MH0"),
            new Location("Rome", "Italy", "IT-sky", "https://images.unsplash.com/photo-1603655996066-3f7647bb448c?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE3ODU3MH0"),
            new Location("Barcelona", "Spain", "ES-sky", "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE3ODU3MH0"),
            new Location("New York City", "New York", "NYCA-sky", "https://images.unsplash.com/photo-1587888771042-6e103d1d7fc2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE3ODU3MH0"),
            new Location("Sydney", "Australia", "AU-sky", "https://images.unsplash.com/photo-1563117016-ad4553cb742d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE3ODU3MH0"),
            new Location("Yosemite", "California", "LAXA-sky", "https://images.unsplash.com/photo-1595769485301-bb03a966d398?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE3ODU3MH0"),
            new Location("Santorini", "Greece", "GR-sky", "https://images.unsplash.com/photo-1562762790-80340c5a0177?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE3ODU3MH0"),
    };
    
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