package com.sky.clo.flight;

import org.apache.tomcat.util.json.JSONParser;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.util.JSONPObject;

@RestController
public class FlightController {
    @Value("${com.rapidapi.key}")
    private String rapidApiKey;

    @GetMapping("/flights")
    public JsonNode flightRequest(@RequestParam(value = "location", defaultValue = "London") String location)
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
        outboundpartialdate = "2020-10-25";
        String newUrl = "https://rapidapi.p.rapidapi.com/apiservices/referral/v1.0/{country}/{currency}/{locale}/{originplace}/{destinationplace}/{outboundpartialdate}/{rapidApiKey}";
        String url = "https://rapidapi.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/SFO-sky/ORD-sky/2020-10-25";

        uriParams.put("apiKey", rapidApiKey);
        // uriParams.put("query", location);

        HttpHeaders headers = new HttpHeaders();
        headers.set("x-rapidapi-host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com");
        headers.set("x-rapidapi-key", rapidApiKey);
        headers.set("useQueryString", "true");

        HttpEntity<Flight> entity = new HttpEntity<>(headers);

        ResponseEntity<String> responseTwo = template.exchange(url, HttpMethod.GET, entity, String.class, uriParams);
        try {
            ObjectMapper objMap = new ObjectMapper();
            JsonNode jsonNode = objMap.readTree(responseTwo.getBody());
            return jsonNode;

        } catch (Exception e) {

        }
        return null;
    }
}