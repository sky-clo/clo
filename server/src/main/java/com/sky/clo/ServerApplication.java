package com.sky.clo;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// Initialises and runs the server application
// Any external classes used for REST/Controllers should be added to the basePackageClasses list
@SpringBootApplication
@Configuration
@ComponentScan(basePackageClasses = { WeatherController.class, AirportController.class })
public class ServerApplication {
	@Value("${cors.origin}")
	private String origin;


	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").allowedMethods("GET", "POST", "PUT", "DELETE")
						.allowedOrigins(origin);
			}
		};
	}
}