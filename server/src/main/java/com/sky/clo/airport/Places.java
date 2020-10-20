package com.sky.clo.airport;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Places {
    private String PlaceId;
    private String PlaceName;
    private String CountryId;
    private String RegionId;
    private String CityId;
    private String CountryName;

    public String getPlaceId() {
        return this.PlaceId;
    }

    public void setPlaceId(String placeId) {
        this.PlaceId = placeId;
    }

    public String getPlaceName() {
        return PlaceName;
    }

    public void setPlaceName(String placeName) {
        PlaceName = placeName;
    }

    public String getCountryId() {
        return CountryId;
    }

    public void setCountryId(String countryId) {
        CountryId = countryId;
    }

    public String getRegionId() {
        return RegionId;
    }

    public void setRegionId(String regionId) {
        RegionId = regionId;
    }

    public String getCityId() {
        return CityId;
    }

    public void setCityId(String cityId) {
        CityId = cityId;
    }

    public String getCountryName() {
        return CountryName;
    }

    public void setCountryName(String countryName) {
        CountryName = countryName;
    }
}
