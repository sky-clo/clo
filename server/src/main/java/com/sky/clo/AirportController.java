package com.sky.clo;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.util.UriComponentsBuilder;

@Controller // Controls all requests incoming to /location
@RequestMapping(path = "/airports")
public class AirportController {

    @Value("${com.rapidapi.key}") private String rapidApiKey;

    @Value("${com.rapidapi.host}") private String rapidApiHost;

    @GetMapping(path = {"/", ""})
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    public JsonNode findAllAirports(@RequestParam(value = "query") String query) throws RestClientException {

        // Create a new template for making our REST -> GET request
        RestTemplate template = new RestTemplate();

        // Replace our apiKey and query placeholders in URL with a useful value
        String url = "https://rapidapi.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/";
        // Create a URL builder to add our ?query={query} value to the URL
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(url).queryParam("query", query);

        // Create a new Headers Object to pass through our required headers
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("x-rapidapi-host", rapidApiHost);
        headers.set("x-rapidapi-key", rapidApiKey);

        // Create a new HTTPEntity, involving most of the data required for our HTTP Request
        HttpEntity<String> entity = new HttpEntity<String>("parameters", headers);

        try {
            // Bundle our Headers, and URL query builder together into our RestTemplate exchange for a full request
            ResponseEntity<String> respEntity = template.exchange(builder.toUriString(), HttpMethod.GET, entity, String.class);

            // Retrieve our Stringified JSON response and convert it into a JSON Node
            ObjectMapper mapper = new ObjectMapper();
            JsonNode actualObj = mapper.readTree(respEntity.getBody());
            // Send Parsed data back to client who requested it
            return actualObj;
        }
        catch (RestClientException exception) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
        catch (JsonProcessingException exception) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}