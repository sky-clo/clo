package com.sky.clo.services;

import com.sky.clo.weather.Weather;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

@Service
public class WeatherService {
    private final String url = "https://api.weatherapi.com/v1/current.json?key={apiKey}&q={query}";

    @Value("${com.weatherapi.key}")
    private String apiKey;

    private final RestTemplate restTemplate;

    public WeatherService(RestTemplateBuilder restTemplateBuilder) {
        this.restTemplate = restTemplateBuilder.build();
    }

    @Async
    public CompletableFuture<Weather> search(String query) {
        // Retrieve data from an API endpoint and return the result using Weather.class variables
        Weather response = restTemplate.getForObject(url, Weather.class, apiKey, query);
        return CompletableFuture.completedFuture(response);
    }
}
