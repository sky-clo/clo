package com.sky.clo.server;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class WeatherController {
    @Value("${com.weatherapi.key}")
    private String weatherApiKey;

    @GetMapping("/weather")
    public Weather weather(@RequestParam(value = "location", defaultValue = "London") String location) {
        RestTemplate template = new RestTemplate();
        String url = "https://api.weatherapi.com/v1/current.json?key=" + weatherApiKey + "&q=" + location;

        return template.getForObject(url, Weather.class);
    }
}