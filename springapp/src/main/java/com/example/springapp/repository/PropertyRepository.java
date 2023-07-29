package com.example.springapp.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.Property;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PropertyRepository extends JpaRepository<Property, Long> {

    List<Property> findByAddressContainingIgnoreCase(String location);

//    long countByAgentIdAndStatusAndVerificationStatus(long agentId, String status, String verificationStatus);

//    long countByAgentIdAndVerificationStatus(long agentId, String verificationStatus);

//    List<Property> findByAgentId(long agentId);

//    long countByAgentId(long agentId);
}
