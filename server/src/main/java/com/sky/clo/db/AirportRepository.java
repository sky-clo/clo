package com.sky.clo.db;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
public interface AirportRepository extends CrudRepository<Airport, Integer> {
    @Query("SELECT a FROM Airport a WHERE a.code LIKE %:query% OR a.title LIKE %:query% OR a.city LIKE %:query% OR a.state LIKE %:query% OR a.country LIKE %:query%")
    List<Airport> findAny(@Param("query") String query);
}