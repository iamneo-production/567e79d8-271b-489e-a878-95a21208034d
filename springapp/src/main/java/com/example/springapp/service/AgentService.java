package com.example.springapp.service;

import org.springframework.stereotype.Service;

import com.example.springapp.model.Agent;
import com.example.springapp.repository.AgentRepository;
import com.example.springapp.model.User;
import com.example.springapp.repository.UserRepository;
import com.example.springapp.model.Property;
import com.example.springapp.repository.PropertyRepository;

import java.util.List;
import java.util.Optional;

@Service
public class AgentService {

    
    private final AgentRepository agentrepo;
    private final UserRepository userrepo;
    private final PropertyRepository propertyrepo;

    public AgentService(AgentRepository agentrepo, UserRepository userrepo, PropertyRepository propertyrepo) {
        this.agentrepo = agentrepo;
        this.userrepo = userrepo;
        this.propertyrepo = propertyrepo;
    }

    public List<Agent> getallagent()
    {
        return agentrepo.findAll();
    }

    public Optional<Agent> getagentbyid(Long id)
    {
        return agentrepo.findById(id);
    }

    public List<User> getalluser()
    {
        return userrepo.findAll();
    }

    public Optional<User> getuserbyid(Integer id)
    {
        return userrepo.findById(id);
    }

    public List<Property> getallproperty()
    {
        return propertyrepo.findAll();
    }

    public Optional<Property> getpropertybyid(Long id)
    {
        return propertyrepo.findById(id);
    }
}
