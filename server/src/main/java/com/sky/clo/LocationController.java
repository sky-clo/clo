package com.sky.clo;


import com.sky.clo.db.Location;
import com.sky.clo.db.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.sql.DataSource;

@Controller // Controls all requests incoming to /location
@RequestMapping(path = "/locations")
public class LocationController {
    // Get the Java Bean called locationRepository, auto-generated by Spring
    @Autowired
    private LocationRepository locationRepository;

    // Map only POST requests
    @PostMapping(path = "/add")
    @ResponseStatus(HttpStatus.CREATED)
    public void addNewLocation(
            @RequestParam String name, @RequestParam String country, @RequestParam String description,
            @RequestParam(required = false) String featured_in, String img_url
    ) {
        // @ResponseBody means the returned String is the response, not a view name (removed)
        // @RequestParam means it is a parameter from the GET or POST request
        // @ResponseStatus means return a HTTPStatus 201 when successful

        Location location = new Location();
        location.setName(name);
        location.setCountry(country);
        location.setDescription(description);
        //location.setFeatured_in(featured_in);
        location.setImg_url(img_url);

        try {
            locationRepository.save(location);
        } catch (Exception exception) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping(path = {"/", ""})
    public @ResponseBody
    Iterable<Location> getAllLocations() {
        // This returns a JSON or XML with the users
        return locationRepository.findAll();
    }
}