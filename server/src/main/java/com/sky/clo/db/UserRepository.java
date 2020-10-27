package com.sky.clo.db;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    @Query("SELECT u FROM User u WHERE u.email LIKE %:email%")
    User findByEmail(@Param("email") String email); // Add a custom findByEmail method to our User Repo
    //Optional<User> findByUserEmail(@Param("query") String query);
}
