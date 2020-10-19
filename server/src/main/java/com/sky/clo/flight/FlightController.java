package com.sky.clo.flight;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@RestController
public class FlightController {
    @Value("${com.rapidapi.key}")
    private String rapidApiKey;

    @GetMapping("/flights")
    public Flight flightRequest(@RequestParam(value = "location", defaultValue = "London") String location)
            throws RestClientException {
        RestTemplate template = new RestTemplate();
        Map<String, String> uriParams = new HashMap<String, String>();

        String country, currency, locale, originplace, destinationplace, outboundpartialdate, inboundpartialdate,
                shortapikey;
        country = "England";
        currency = "pounds";
        locale = "GB";
        originplace = "London";
        destinationplace = "Paris";
        outboundpartialdate = "anytime";
        String newUrl = "https://rapidapi.p.rapidapi.com/apiservices/referral/v1.0/{country}/{currency}/{locale}/{originplace}/{destinationplace}/{outboundpartialdate}/{apiKey}";
        // String url =
        // "https://api.weatherapi.com/v1/current.json?key={apiKey}&q={query}";
        uriParams.put("apiKey", rapidApiKey);
        // uriParams.put("query", location);

        Flight weatherResponse = template.getForObject(newUrl, Flight.class, uriParams);
        return weatherResponse;
    }
}