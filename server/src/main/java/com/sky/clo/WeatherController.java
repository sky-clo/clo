package com.sky.clo;

import com.sky.clo.weather.Weather;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

// RestController for handling incoming GET requests for '/weather'
@RestController
public class WeatherController {
    // Extract weatherApi Key from application.properties
    // TODO: Refresh this and add it to server .ENV variables
    @Value("${com.weatherapi.key}")
    private String weatherApiKey;

    // Handles all /weather requests, providing a default vaue for ?location= if nothing is passed
    @GetMapping("/weather")
    public Weather weatherRequest(@RequestParam(value = "location", defaultValue = "London") String location, @RequestAttribute(value = "email", required = false) String email) throws RestClientException {

        //System.out.println("email = " + email);
        System.out.println("Finding weather for " + location);

        if(email != null) {
            System.out.println("Email:" + email);
        } else {
            System.out.println("No email sent");
        }

        RestTemplate template = new RestTemplate();
        Map<String, String> uriParams = new HashMap<String, String>();

        // Replace our apiKey and query placeholders in URL with a useful value
        String url = "https://api.weatherapi.com/v1/current.json?key={apiKey}&q={query}";
        uriParams.put("apiKey", weatherApiKey);
        uriParams.put("query", location);

        // Retrieve data from an API endpoint and return the result using Weather.class variables
        Weather weatherResponse = template.getForObject(url, Weather.class, uriParams);
        return weatherResponse;
    }
}