package com.sky.clo.models;

import com.sky.clo.db.User;

public class AuthenticationResponse {
    private final String jwt;
    private final User user;

    public AuthenticationResponse(String jwt) {
        this.jwt = jwt;
        this.user = null;
    }

    public AuthenticationResponse(String jwt, User user) {
        this.jwt = jwt;
        this.user = user;
    }

    public String getJwt() {
        return jwt;
    }

    public UserResponse getUser() {
        return new UserResponse(
            this.user.getFirstname(),
            this.user.getLastname(),
            this.user.getEmail(),
            this.user.getHouse_no(),
            this.user.getPostcode()
        );
    }
}
