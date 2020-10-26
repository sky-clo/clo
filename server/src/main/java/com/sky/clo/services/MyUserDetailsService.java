package com.sky.clo.services;

import com.sky.clo.db.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired // Get and inject userRepository instance via Spring
    private UserService userService;

    @Transactional
    // Load user from the database from their unique email
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userService.findUserByEmail(email);

        // Build user using Spring Security built in class to send back
        return buildUserForAuthentication(user);
    }

    public UserDetails loadByUser(User user) {
        return buildUserForAuthentication(user);
    }

    private UserDetails buildUserForAuthentication(User user) {
        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(),
                true, true, true, true, new ArrayList<>());
    }
}
