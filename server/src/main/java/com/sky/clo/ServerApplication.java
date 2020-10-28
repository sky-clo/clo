package com.sky.clo;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// Initialises and runs the server application
// Any external classes used for REST/Controllers should be added to the basePackageClasses list
@SpringBootApplication
@RestController
@EnableAutoConfiguration
public class ServerApplication {
	@Value("${cors.origin}")
	private String origin;

    public static void main(String[] args) {
        SpringApplication.run(ServerApplication.class, args);
    }
}