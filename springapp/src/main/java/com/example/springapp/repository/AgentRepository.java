package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.Agent;

public interface AgentRepository extends JpaRepository<Agent,Long>{
    
}
