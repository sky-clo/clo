package com.sky.clo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

// Initialises and runs the server application
// Any external classes used for REST/Controllers should be added to the basePackageClasses list
@SpringBootApplication @ComponentScan(basePackageClasses = {WeatherController.class})
public class ServerApplication {
	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}
}