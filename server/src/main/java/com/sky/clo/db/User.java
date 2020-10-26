package com.sky.clo.db;


import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "users")
public class User {
    @Id @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;
    @NotNull @NotBlank @NotEmpty
    private String firstname;
    @NotNull(message = "Lastname is a required field") @NotBlank(message = "EEE") @NotEmpty(message = "EEEE")
    private String lastname;
    @NotNull @NotBlank @NotEmpty @Email @Column(nullable = false)
    private String email;
    @NotNull @NotBlank @NotEmpty
    private String password;
    private String house_no;
    private String postcode;

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getHouse_no() {
        return house_no;
    }

    public void setHouse_no(String house_no) {
        this.house_no = house_no;
    }

    public String getPostcode() {
        return postcode;
    }

    public void setPostcode(String postcode) {
        this.postcode = postcode;
    }
}
