package com.example.springapp.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import com.example.springapp.model.Agent;
import com.example.springapp.model.User;
import com.example.springapp.model.Property;
import com.example.springapp.service.AgentService;
import java.util.List;
import java.util.Optional;

@RestController
public class AgentController {

    private final AgentService agentService;

    public AgentController(AgentService agentService) {
        this.agentService = agentService;
    }
    
    @PostMapping("/agents")
    public Agent addAgent(@RequestBody Agent agent) {
        return agentService.saveAgent(agent);
    }
     @DeleteMapping("/agents/{id}")
    public String deleteAgent(@PathVariable long id) {
        return agentService.deleteAgent(id);
    }
    @PutMapping("/agents/")
    public Agent updateAgent(@RequestBody Agent agent) {
        return agentService.updateAgent(agent);
    }

    @GetMapping("/agents")
    public ResponseEntity<List<Agent>> getAllAgents() {
        List<Agent> agents = agentService.getallagent();
        return ResponseEntity.ok(agents);
    }

    @GetMapping("/agents/{id}")
    public ResponseEntity<Agent> getAgentById(@PathVariable Long id) {
        Optional<Agent> agentOptional = agentService.getagentbyid(id);
        return agentOptional.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
            }

            @GetMapping("/users")
            public ResponseEntity<List<User>> getAllUsers() {
                List<User> users = agentService.getalluser();
                return ResponseEntity.ok(users);
            }
        
            @GetMapping("/users/{id}")
            public ResponseEntity<User> getUserById(@PathVariable Integer id) {
                Optional<User> userOptional = agentService.getuserbyid(id);
                return userOptional.map(ResponseEntity::ok)
                        .orElseGet(() -> ResponseEntity.notFound().build());
                    }

                    @GetMapping("/properties")
                    public ResponseEntity<List<Property>> getAllProperty() {
                        List<Property> property = agentService.getallproperty();
                        return ResponseEntity.ok(property);
                    }
                
                    @GetMapping("/properties/{id}")
                    public ResponseEntity<Property> getPropertyById(@PathVariable Long id) {
                        Optional<Property> propertyOptiona = agentService.getpropertybyid(id);
                        return propertyOptiona.map(ResponseEntity::ok)
                                .orElseGet(() -> ResponseEntity.notFound().build());
                            }
}
