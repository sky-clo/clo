package com.sky.clo;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.sky.clo.airport.Airport;
import com.sky.clo.airport.Places;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Controller // Controls all requests incoming to /location
@RequestMapping(path = "/airports")
public class AirportController {

    @Value("${com.rapidapi.key}")
    private String rapidApiKey;

    @Value("${com.rapidapi.host}")
    private String rapidApiHost;

    @GetMapping(path = {"/", ""})
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    public ObjectNode findAllAirports(@RequestParam(value = "query") String query) {
        //* USED WITH MySQL DB - Please ignore
        // This returns a JSON or XML with the users
        //return airportRepository.findAll();

        // Create a new template for making our REST -> GET request
        RestTemplate template = new RestTemplate();

        // Replace our apiKey and query placeholders in URL with a useful value
        String url = "https://rapidapi.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/";
        // Create a URL builder to add our ?query={query} value to the URL
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(url).queryParam("query", query);

        // Create a new Headers Object to pass through our required headers
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("x-rapidapi-host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com");
        headers.set("x-rapidapi-key", "f2b3ba2283msh0bdefed120f9723p199e3ajsnd12deabd2039");

        HttpEntity<String> entity = new HttpEntity<String>("parameters", headers);

        //ResolvableType resolvableType = ResolvableType.forClassWithGenerics(List.class, Places.class);
        //ParameterizedTypeReference<List<Places>> typeRef = ParameterizedTypeReference.forType(resolvableType.getType());

        ResponseEntity<Map> respEntity = template.exchange(builder.toUriString(), HttpMethod.GET, entity, Map.class);

        List<Places> placesList = (List<Places>) respEntity.getBody().get("Places");

        ObjectMapper mapper = new ObjectMapper();
        ObjectNode rootNode = mapper.createObjectNode();
        try {
            String json = mapper.writeValueAsString(placesList);
            rootNode.set("places", mapper.valueToTree(placesList));
            return rootNode;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}