package com.sky.clo.services;

import com.fasterxml.jackson.databind.JsonNode;
import com.sky.clo.models.GeocodeResponse;
import com.sky.clo.models.UnsplashRandomPhotoResponse;
import com.sky.clo.weather.Weather;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import java.util.concurrent.CompletableFuture;

@Service
public class GoogleMapsService {
    private final String baseUrl = "https://maps.googleapis.com/maps/api";

    @Value("${googlemaps.apikey}")
    private String apiKey;

    private final RestTemplate restTemplate;

    public GoogleMapsService(RestTemplateBuilder restTemplateBuilder) {
        this.restTemplate = restTemplateBuilder.build();
    }

    @Async
    public CompletableFuture<JsonNode> geocode(String location) {
        try {
            String url = this.baseUrl + "/geocode/json?key=" + apiKey + "&address=" + location;
            JsonNode response = restTemplate.getForObject(url, JsonNode.class, apiKey, location);
            return CompletableFuture.completedFuture(response);
        } catch (HttpClientErrorException e) {
            return CompletableFuture.completedFuture(null);
        }

    }

}
