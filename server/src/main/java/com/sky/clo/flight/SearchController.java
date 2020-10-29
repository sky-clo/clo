package com.sky.clo.flight;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Controller
@RequestMapping(path = "/search")
public class SearchController {
    @Value("${com.rapidapi.key}")
    private String rapidApiKey;

    @GetMapping(path = { "/", "" })
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    public JsonNode searchRequest(@RequestParam(value = "from") String from, @RequestParam(value = "to") String to,
            @RequestParam(value = "outboundDate") String outboundDate,
            @RequestParam(required = false, value = "inboundDate") String inboundDate) throws RestClientException {
        RestTemplate template = new RestTemplate();
        Map<String, String> uriParams = new HashMap<String, String>();

        uriParams.put("apiKey", rapidApiKey);

        HttpHeaders headers = new HttpHeaders();
        headers.set("x-rapidapi-host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com");
        headers.set("x-rapidapi-key", rapidApiKey);
        headers.set("useQueryString", "true");

        HttpEntity<String> entity = new HttpEntity<>(headers);

        String url = getUrl("GB", "GBP", "en_GB", from, to, inboundDate, outboundDate);

        ResponseEntity<String> responseTwo = template.exchange(url, HttpMethod.GET, entity, String.class, uriParams);
        try {
            ObjectMapper objMap = new ObjectMapper();
            JsonNode jsonNode = objMap.readTree(responseTwo.getBody());
            return jsonNode;

        } catch (Exception e) {
            System.err.println(e);

        }
        return null;
    }

    // Returns the url for request from API from the params.
    private String getUrl(String country, String currency, String locale, String originLocation, String destLocation,
            String inBoundPartialDate, String outBoundPartialDate) {
        StringBuilder url = new StringBuilder("https://rapidapi.p.rapidapi.com/apiservices/browseroutes/v1.0/");
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