package com.example.springapp.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.Property;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import java.util.List;

public interface PropertyRepository extends JpaRepository<Property,Long>{
    @Autowired
    EntityManager em = null;





}
