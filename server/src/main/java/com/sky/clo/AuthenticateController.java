package com.sky.clo;

import com.sky.clo.db.User;
import com.sky.clo.models.AuthenticationRequest;
import com.sky.clo.models.AuthenticationResponse;
import com.sky.clo.services.MyUserDetailsService;
import com.sky.clo.services.UserService;
import com.sky.clo.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;

@Controller // Controls all requests incoming to /location
@RequestMapping(path = "/authenticate")
public class AuthenticateController {

    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    UserService userService;
    @Autowired
    MyUserDetailsService myUserDetailsService;
    @Autowired
    JwtUtil jwtTokenUtil;

    @PostMapping(path = "/login")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authReq) throws Exception {
        User userExists = userService.findUserByEmail(authReq.getUsername());

        if (userExists == null) {
            throw new Exception("Invalid Credentials");
        }

        final UserDetails userDetails = myUserDetailsService.loadUserByUsername(authReq.getUsername());

        // Compare saved BCrypt value with provided unencrypted string
        final boolean isValidPass = userService.verifyBCrypt(userDetails.getPassword(), authReq.getPassword());

        if(!isValidPass) {
            return new ResponseEntity<>("Invalid Credentials", HttpStatus.BAD_REQUEST);
        }

        // Generate user JWT if the user is valid
        final String jwt = jwtTokenUtil.generateToken(userDetails);

        return ResponseEntity.ok(new AuthenticationResponse(jwt));
    }
}
