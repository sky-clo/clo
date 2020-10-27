package com.sky.clo;

import com.sky.clo.db.User;
import com.sky.clo.models.RegisterAccountRequest;
import com.sky.clo.models.AuthenticationResponse;
import com.sky.clo.services.MyUserDetailsService;
import com.sky.clo.services.UserService;
import com.sky.clo.util.JsonResponse;
import com.sky.clo.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Controller // Controls all requests incoming to /location
@RequestMapping(path = "/authenticate", consumes = MediaType.APPLICATION_JSON_VALUE)
@Validated
public class AuthenticateController {

    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    UserService userService;
    @Autowired
    MyUserDetailsService myUserDetailsService;
    @Autowired
    JwtUtil jwtTokenUtil;

    @RequestMapping(value = "/login", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody RegisterAccountRequest authReq) throws Exception {
        // Find a user in our DB from the provided email address (getUsername here is our Email)
        User userExists = userService.findUserByEmail(authReq.getUsername());

        // If no user is found return an error back immediately
        if (userExists == null) {
            System.out.println("No user exists, returning BAD_REQUEST code");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("No user found."); //new ResponseEntity<Error>(HttpStatus.BAD_REQUEST);
        }

        // Load our located user into a UserDetails object
        final UserDetails userDetails = myUserDetailsService.loadUserByUsername(authReq.getUsername());
        // Compare saved BCrypt value with provided unencrypted string
        final boolean isValidPass = userService.verifyBCrypt(userDetails.getPassword(), authReq.getPassword());

        // If the provided value does not match then return an invalid credentials issue to the user
        if(!isValidPass) {
            return new ResponseEntity<Error>(HttpStatus.BAD_REQUEST);
        }

        // Generate user JWT if the user is valid
        final String jwt = jwtTokenUtil.generateToken(userDetails);

        // Return authenticated user JWT value to response
        return ResponseEntity.ok(new AuthenticationResponse(jwt, userExists));
    }

    @PostMapping(path = "/register")
    //@ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> createNewUser(@Valid @RequestBody User user, BindingResult bindingResult) throws Exception {
        // Find a user in our DB from the provided email address
        User userExists = userService.findUserByEmail(user.getEmail());

        // Load our located user into a UserDetails object
        final UserDetails userDetails = myUserDetailsService.loadByUser(user);

        // If no user is found return an error back immediately
        if (userExists != null) {
            return new ResponseEntity<>("User Already Exists", HttpStatus.BAD_REQUEST);
        }

        JsonResponse jsonResponse = new JsonResponse();

        try {
            userService.saveUser(user);
            // Generate user JWT if the user is valid
            final String jwt = jwtTokenUtil.generateToken(userDetails);

            // Return authenticated user JWT value to response
            return ResponseEntity.ok(new AuthenticationResponse(jwt, user));
        } catch (DataIntegrityViolationException exception) {
            jsonResponse.addLine("error", exception.getRootCause().getMessage());
            return new ResponseEntity<>(jsonResponse.getRootNode(), HttpStatus.BAD_REQUEST);
        } catch (Exception exception) {
            jsonResponse.addLine("error", exception.getMessage());
            return new ResponseEntity<>(jsonResponse.getRootNode(), HttpStatus.BAD_REQUEST);
        }
    }
}
