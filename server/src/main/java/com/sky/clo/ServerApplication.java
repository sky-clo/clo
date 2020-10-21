package com.sky.clo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

// Initialises and runs the server application
// Any external classes used for REST/Controllers should be added to the basePackageClasses list
@SpringBootApplication
@RestController
@ComponentScan(basePackageClasses = {WeatherController.class, AirportController.class})
public class ServerApplication {
	@RequestMapping("/resource")
	public Map<String,Object> home() {
		Map<String,Object> model = new HashMap<String,Object>();
		model.put("id", UUID.randomUUID().toString());
		model.put("content", "Hello World");
		return model;
	}

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}
}