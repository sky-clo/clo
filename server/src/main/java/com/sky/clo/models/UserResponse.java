package com.sky.clo.models;

public class UserResponse {
    private final String firstName;
    private final String lastName;
    private final String email;
    private final String houseNo;
    private final String postcode;

    public UserResponse(String firstName, String lastName, String email, String houseNo, String postcode) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.houseNo = houseNo;
        this.postcode = postcode;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getHouseNo() {
        return houseNo;
    }

    public String getPostcode() {
        return postcode;
    }
}
