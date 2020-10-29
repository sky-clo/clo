package com.sky.clo;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/trip")
public class TripController {
    @PostMapping()
    public @ResponseBody void createTrip() {

    }
}