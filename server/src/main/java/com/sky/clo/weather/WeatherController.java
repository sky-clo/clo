package com.sky.clo.weather;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@RestController
public class WeatherController {
    @Value("${com.weatherapi.key}")
    private String weatherApiKey;

    @GetMapping("/weather")
    public Weather weatherRequest(@RequestParam(value = "location", defaultValue = "London") String location) throws RestClientException {
        RestTemplate template = new RestTemplate();
        Map<String, String> uriParams = new HashMap<String, String>();

        String url = "https://api.weatherapi.com/v1/current.json?key={apiKey}&q={query}";
        uriParams.put("apiKey", weatherApiKey);
        uriParams.put("query", location);

        Weather weatherResponse = template.getForObject(url, Weather.class, uriParams);
        return weatherResponse;
    }
}