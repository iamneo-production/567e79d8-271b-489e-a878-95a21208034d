package com.example.springapp.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.Calendar;
import com.example.springapp.model.Agent;
import com.example.springapp.service.AgentService;

import java.util.List;
import java.util.HashMap;
import java.util.Map;
import org.springframework.http.ResponseEntity;
import java.util.Optional;

@RestController
public class AgentController {

    private static Map<String, List<Integer>> viewsData = new HashMap<>();
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

    // @GetMapping("/users")
    // public ResponseEntity<List<User>> getAllUsers() {
    // List<User> users = agentService.getalluser();
    // return ResponseEntity.ok(users);
    // }

    // agentBackend-Agentviewcount
    @GetMapping("/{id}/views")
    public List<Integer> getAgentViewsData(@PathVariable long id) {
        String agentIdStr = String.valueOf(id);
        return viewsData.getOrDefault(agentIdStr, new ArrayList<>());
    }

    @PostMapping("/{id}/views")
    public List<Integer> addAgentView(@PathVariable long id) {

        Calendar cal = Calendar.getInstance();
        int currentMonth = cal.get(Calendar.MONTH);

        String agentIdStr = String.valueOf(id);
        List<Integer> agentViewsData = viewsData.getOrDefault(agentIdStr, new ArrayList<>());
        if (currentMonth < agentViewsData.size()) {
            agentViewsData.set(currentMonth, agentViewsData.get(currentMonth) + 1);
        } else {
            int diff = currentMonth - agentViewsData.size();
            for (int i = 0; i < diff; i++) {
                agentViewsData.add(0);
            }
            agentViewsData.add(1);
        }

        viewsData.put(agentIdStr, agentViewsData);
        return agentViewsData;

    }
}
