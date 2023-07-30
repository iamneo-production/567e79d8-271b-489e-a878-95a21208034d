
package com.example.springapp.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import com.backend.backend.model.Property;
import com.backend.backend.repository.DashboardRepositoryRepository;
import com.backend.backend.service.PropertyService;
import java.util.Map;


@RestController
@CrossOrigin(origins = "http://localhost:3002")
@RequestMapping("/api/agents")
public class DashboardController {
    private final DashboardRepository dashboardRepository;
    
    
      private Map<String, List<Integer>> viewsData = new HashMap<>();
      

    @Autowired
    public DashboardController ( DashboardRepository dashboardRepository) {
        this.dashboardRepository = dashboardRepository;
       
        
    }

    @GetMapping("/{agentId}/count/cancelled")
    public long getCancelledCountById(@PathVariable int agentId) {
        return propertyRepository.countByAgentIdAndVerificationStatus(agentId, "Cancelled");
    }

    @GetMapping("/{agentId}/count/approved")
    public long getApprovedCountById(@PathVariable int agentId) {
        return propertyRepository.countByAgentIdAndVerificationStatus(agentId, "Approved");
    }

    @GetMapping("/{agentId}/count/pending")
    public long getPendingCountById(@PathVariable int agentId) {
        return propertyRepository.countByAgentIdAndVerificationStatus(agentId, "Pending");
    }

    @GetMapping("/{agentId}/count/sold")
    public long getSoldCountById(@PathVariable int agentId) {
        return propertyRepository.countByAgentIdAndVerificationStatus(agentId, "Sold");
    }
    
    @GetMapping("/{agentId}/count/property")
    public long getTotalPropertiesByAgentId(@PathVariable int agentId) {
        return propertyRepository.countByAgentId(agentId);
    }

    @GetMapping("/{agentId}/properties")
    public List<Property> getPropertiesByAgentId(@PathVariable int agentId) {
        Agent agent = new Agent();
        agent.setId(agentId);
        return propertyRepository.findByAgent(agent);
    }
    
    @GetMapping("/{agentId}/count/availableRent")
    public long getAvailableRentByAgentId(@PathVariable int agentId) {
        return propertyRepository.countByAgentIdAndRentStatusAndVerificationStatus(agentId, "rent", "Approved");
    }
    
    @GetMapping("/{agentId}/count/availableSale")
    public long getAvailableSaleByAgentId(@PathVariable int agentId) {
        return propertyRepository.countByAgentIdAndRentStatusAndVerificationStatus(agentId, "Sale", "Approved");
    }
    
    @GetMapping("/{agentId}/count/totalRented")
    public long getTotalRentedPropertiesByAgentId(@PathVariable int agentId) {
        return propertyRepository.countByAgentIdAndRentStatusAndVerificationStatus(agentId, "rent", "sold");
    }   

    @GetMapping("/{agentId}/successPercentage")
public ResponseEntity<Double> getAgentSuccessPercentage(@PathVariable int agentId) {
    long totalProperties = dashboardRepository.countByAgentId(agentId);
    long successfulProperties = dashboardRepository.countByAgentIdAndVerificationStatus(agentId, "sold");
    double successPercentage = 0.0;
    if (totalProperties > 0) {
        successPercentage = ((double) successfulProperties / totalProperties) * 100.0;
    }
    return ResponseEntity.ok(successPercentage);
}

    @GetMapping("/{agentId}/views")
    public List<Integer> getAgentViewsData(@PathVariable int agentId) {
        String agentIdStr = String.valueOf(agentId);
        return viewsData.getOrDefault(agentIdStr, new ArrayList<>());
    }

    
   

    @PostMapping("/{agentId}/views")
    public List<Integer> addAgentView(@PathVariable int agentId) {
       
        Calendar cal = Calendar.getInstance();
        int currentMonth = cal.get(Calendar.MONTH);

        String agentIdStr = String.valueOf(agentId);
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

    @PostMapping("/{id}/viewsProperty")
    public List<Integer> addPropertyView(@PathVariable Long id) {

    Calendar cal = Calendar.getInstance();
    int currentMonth = cal.get(Calendar.MONTH);

    String propertyIdStr = String.valueOf(id);
    List<Integer> propertyViewsData = viewsData.getOrDefault(propertyIdStr, new ArrayList<>());
    if (currentMonth < propertyViewsData.size()) {
        propertyViewsData.set(currentMonth, propertyViewsData.get(currentMonth) + 1);
    } else {
        int diff = currentMonth - propertyViewsData.size();
        for (int i = 0; i < diff; i++) {
            propertyViewsData.add(0);
        }
        propertyViewsData.add(1);
    }

    viewsData.put(propertyIdStr, propertyViewsData);
    return propertyViewsData;
}


@GetMapping("/{id}/viewsProperty")
public List<Integer> getpropertyViewsData(@PathVariable Long id) {
        String propertyIdStr = String.valueOf(id);
        return viewsData.getOrDefault(propertyIdStr, new ArrayList<>());
    }

  


}
