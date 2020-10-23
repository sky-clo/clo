package com.sky.clo.db;

import javax.persistence.*;
import java.util.ArrayList;

@Entity // This tells Hibernate to make a table out of this class
@Table(name = "locations")
public class Location {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;
    private String name;
    private String country;
    private String description;
    //private ArrayList<String> featured_in;
    private String img_url;
    private Float lat;
    private Float lng;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    /*public ArrayList<String> getFeatured_in() {
        return featured_in;
    }*/

    /*public void setFeatured_in(String featured_in) {
        this.featured_in.add(featured_in);
    }*/

    public String getImg_url() {
        return img_url;
    }

    public void setImg_url(String img_url) {
        this.img_url = img_url;
    }
    
    public Float getLat() {
        return lat;
    }

    public void setLat(Float lat) {
        this.lat = lat;
    }

    public Float getLng() {
        return lng;
    }

    public void setLng(Float lng) {
        this.lng = lng;
    }
}