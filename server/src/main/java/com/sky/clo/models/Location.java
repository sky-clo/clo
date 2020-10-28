package com.sky.clo.models;

import com.fasterxml.jackson.databind.JsonNode;
import com.sky.clo.weather.Weather;

public class Location {
    private String name;
    private String country;
    private String imgUrl;

    public Location(String name, String country) {
        this.name = name;
        this.country = country;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }
}