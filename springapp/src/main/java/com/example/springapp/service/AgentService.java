package com.example.springapp.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
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

    @Autowired
    private final AgentRepository agentrepo;
    private final UserRepository userrepo;
    private final PropertyRepository propertyrepo;

    public AgentService(AgentRepository agentrepo, UserRepository userrepo, PropertyRepository propertyrepo) {
        this.agentrepo = agentrepo;
        this.userrepo = userrepo;
        this.propertyrepo = propertyrepo;
    }

     public Agent saveAgent(Agent agent) {
	        return agentrepo.save(agent);
	    }

    public String deleteAgent(long id) {
	        agentrepo.deleteById(id);
	        return "agent removed !! " + id;
	    }
	    public Agent updateAgent(Agent agent) {
	        Agent existingAgent = agentrepo.findById(agent.getId()).orElse(null);
	        existingAgent.setName(agent.getName());
	        existingAgent.setEmail(agent.getEmail());
	        existingAgent.setPhone(agent.getPhone());
	        existingAgent.setDescription(agent.getDescription());
	        return agentrepo.save(existingAgent);
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
