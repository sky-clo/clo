package com.sky.clo;

import com.sky.clo.models.Location;
import com.sky.clo.models.UnsplashRandomPhotoResponse;
import com.sky.clo.services.UnsplashService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

@Controller
@RequestMapping(path = "/locations")
public class LocationController {
    @Autowired
    UnsplashService unsplashService;

    private final Location[] popularLocations = { new Location("London", "United Kingdom"),
            new Location("Paris", "France"), new Location("Tokyo", "Japan"), new Location("Rome", "Italy"),
            new Location("Barcelona", "Spain"), new Location("New York City", "New York"),
            new Location("Sydney", "Australia"), new Location("Yosemite", "California"),
            new Location("Santorini", "Greece"), };

    @PostConstruct
    private void generateLocationPhotos() {
        try {
            for (Location location : popularLocations) {
                CompletableFuture<UnsplashRandomPhotoResponse> response = unsplashService
                        .randomPhoto(location.getName());
                UnsplashRandomPhotoResponse photo = response.get();
                location.setImgUrl(photo.getUrls().getFull());
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /** Returns popular locations */
    @GetMapping(path = { "/", "" })
    public @ResponseBody Location[] getPopularLocations() {
        return popularLocations;
    }
}