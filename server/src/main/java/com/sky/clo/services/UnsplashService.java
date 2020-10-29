package com.sky.clo.services;

import com.sky.clo.models.UnsplashRandomPhotoResponse;
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
public class UnsplashService {
    private final String baseUrl = "https://api.unsplash.com";

    @Value("${unsplash.access-key}")
    private String accessKey;

    @Value("${unsplash.secret-key}")
    private String secretKey;

    private final RestTemplate restTemplate;

    public UnsplashService(RestTemplateBuilder restTemplateBuilder) {
        this.restTemplate = restTemplateBuilder.build();
    }

    @Async
    public CompletableFuture<UnsplashRandomPhotoResponse> randomPhoto(String query) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.set("Accept-Version", "v1");
            headers.set("Authorization", "Client-ID " + this.accessKey);
            HttpEntity<String> entity = new HttpEntity<>(null, headers);

            String url = this.baseUrl + "/photos/random?orientation=landscape&query=" + query;
            ResponseEntity<UnsplashRandomPhotoResponse> results = restTemplate.exchange(url, HttpMethod.GET, entity, UnsplashRandomPhotoResponse.class);
            return CompletableFuture.completedFuture(results.getBody());
        } catch (HttpClientErrorException e) {
            return CompletableFuture.completedFuture(null);
        }

    }

}
