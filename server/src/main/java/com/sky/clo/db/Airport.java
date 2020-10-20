package com.sky.clo.db;


import javax.persistence.*;
import java.util.ArrayList;

/*
* This class refer's to the Airport code for CRUD methods on a MySQL table.
* For SkyScanner api methods please check the com.sky.clo.airport package
* */

@Entity // This tells Hibernate to make a table out of this class
@Table(name = "airports")
public class Airport {
    @Id
    private String code;
    private float lat;
    private float lon;
    private String title;
    private String city;
    private String state;
    private String country;
    private int woeid;
    private String tz;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public float getLat() {
        return lat;
    }

    public void setLat(float lat) {
        this.lat = lat;
    }

    public float getLon() {
        return lon;
    }

    public void setLon(float lon) {
        this.lon = lon;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public int getWoeid() {
        return woeid;
    }

    public void setWoeid(int woeid) {
        this.woeid = woeid;
    }

    public String getTz() {
        return tz;
    }

    public void setTz(String tz) {
        this.tz = tz;
    }
}