package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.Property;

public interface DashboardRepository extends JpaRepository<Property,Long>{
    long countByAgentIdAndRentStatusAndVerificationStatus(int agentId, String rentStatus, String verificationStatus );
    long countByAgentIdAndVerificationStatus(int agentId, String verificationStatus);
    List<Property> findByAgentId(int agentId);
    long countByAgentId(int agentId);
    List<Property> findByAgent(Agent agent);
}
