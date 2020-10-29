package com.sky.clo.services;

import com.sky.clo.models.FlightResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

@Service
public class FlightService {
    private String baseUrl = "https://rapidapi.p.rapidapi.com/apiservices/browseroutes/v1.0/";

    @Value("${com.rapidapi.host}")
    private String rapidApiHost;

    @Value("${com.rapidapi.key}")
    private String rapidApiKey;

    private final RestTemplate restTemplate;

    public FlightService(RestTemplateBuilder restTemplateBuilder) {
        this.restTemplate = restTemplateBuilder.build();
    }

    @Async
    public CompletableFuture<FlightResponse> getFlights(String from, String to, String outboundDate, String inboundDate) {
        Map<String, String> uriParams = new HashMap<String, String>();
        uriParams.put("apiKey", rapidApiKey);

        HttpHeaders headers = new HttpHeaders();
        headers.set("x-rapidapi-host", rapidApiHost);
        headers.set("x-rapidapi-key", rapidApiKey);
        headers.set("useQueryString", "true");


        HttpEntity<String> entity = new HttpEntity<>(null, headers);

        String url = getUrl("GB", "GBP", "en_GB", from, to, inboundDate, outboundDate);
        ResponseEntity<FlightResponse> results = restTemplate.exchange(url, HttpMethod.GET, entity, FlightResponse.class, uriParams);
        return CompletableFuture.completedFuture(results.getBody());
    }

    // Returns the url for request from API from the params.
    private String getUrl(String country, String currency, String locale, String originLocation, String destLocation,
                          String inBoundPartialDate, String outBoundPartialDate) {
        StringBuilder url = new StringBuilder(baseUrl);
        url.append(country);
        url.append('/');
        url.append(currency);
        url.append('/');
        url.append(locale);
        url.append('/');
        url.append(originLocation);
        url.append('/');
        url.append(destLocation);
        url.append('/');
        url.append(outBoundPartialDate);
        url.append('/');

        if (inBoundPartialDate != null) {
            url.append(inBoundPartialDate);
        }
        return url.toString();
    }
}
