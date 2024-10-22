package com.sky.clo.services;

import com.sky.clo.db.User;
import com.sky.clo.db.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.validation.ConstraintViolationException;
import java.sql.SQLIntegrityConstraintViolationException;

@Service
public class UserService {
    private UserRepository userRepository;
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public UserService(UserRepository userRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepository = userRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    // Find user in MySQL db by email
    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    // Set encrypted password and save user to MySQL db
    public User saveUser(User user) throws SQLIntegrityConstraintViolationException, DataIntegrityViolationException, ConstraintViolationException {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    // Verify plaintext password provided against a saved BCrypt value
    public boolean verifyBCrypt(String hash, String pass) {
        return bCryptPasswordEncoder.matches(pass, hash);
    }
}
