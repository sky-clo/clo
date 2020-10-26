package com.sky.clo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RestController;

// Initialises and runs the server application
// Any external classes used for REST/Controllers should be added to the basePackageClasses list
@SpringBootApplication
@RestController
@ComponentScan(basePackageClasses = {WeatherController.class, AirportController.class, AuthenticateController.class})
public class ServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(ServerApplication.class, args);
    }
}