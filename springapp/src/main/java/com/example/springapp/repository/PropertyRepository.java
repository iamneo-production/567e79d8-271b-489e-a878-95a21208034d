package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.Property;
import java.util.List;

public interface PropertyRepository extends JpaRepository<Property,Long>{
    long countByAgentIdAndStatusAndVerificationStatus(long agentId, String status, String verificationStatus );
    long countByAgentIdAndVerificationStatus(long agentId, String verificationStatus);
    List<Property> findByAgentId(long agentId);
    long countByAgentId(long agentId);
}
