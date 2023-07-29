package com.example.springapp.controller;

import java.util.List;
import java.util.Optional;

import com.example.springapp.BaseResponceDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.springapp.model.Property;
import com.example.springapp.service.PropertyService;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;
import java.util.HashMap;
import com.example.springapp.repository.PropertyRepository;
import com.example.springapp.service.PropertyService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import java.util.ArrayList;
import java.util.Calendar;

@RestController
public class PropertyController {

	private Map<String, List<Integer>> viewsData = new HashMap<>();

	@Autowired
	private PropertyService propertyService;
	private PropertyRepository propertyRepository;

	@PostMapping("api/agent/property")
	public BaseResponceDto createProperty(@RequestParam(value = "agentId") String agentId,
			@RequestBody Property property) {
		try {
			propertyService.addProperty(property, Long.parseLong(agentId));
			return new BaseResponceDto("success");
		} catch (Exception e) {
			return new BaseResponceDto(e.getMessage());
		}
	}

//	@RequestMapping("/properties/count1")
//	public int getCountPending() {
//		return propertyService.findpending();
//	}

	@PutMapping("api/agent/property")
	public BaseResponceDto updateProperty(@RequestParam(value = "propertyId") String propertyId,
			@RequestBody Property property) {
		try {
			propertyService.updateProperty(Long.parseLong(propertyId), property);
			return new BaseResponceDto("success");
		} catch (Exception e) {
			return new BaseResponceDto(e.getMessage());
		}
	}

	@DeleteMapping("api/agent/property")
	public BaseResponceDto deleteProperty(@RequestParam(value = "propertyId") String propertyId) {
		try {
			propertyService.deleteProperty(Long.parseLong(propertyId));
			return new BaseResponceDto("success");
		} catch (Exception e) {
			return new BaseResponceDto(e.getMessage());
		}
	}

	@GetMapping("api/property/all")
	public BaseResponceDto getAllProperty() {
		try {
			return new BaseResponceDto("success", propertyService.getAllProperties());
		} catch (Exception e) {
			return new BaseResponceDto(e.getMessage());
		}
	}

	@GetMapping("api/property")
	public BaseResponceDto getPropertyById(@RequestParam(value = "propertyId") String propertyId) {
		try {
			return new BaseResponceDto("success", propertyService.getPropertyById(Long.parseLong(propertyId)));
		} catch (Exception e) {
			return new BaseResponceDto(e.getMessage());
		}
	}

	@GetMapping("api/property/location")
	public BaseResponceDto getPropertyByLocation(@RequestParam(value = "location") String location) {
		try {
			return new BaseResponceDto("success", propertyService.getPropertyByLocation(location));
		} catch (Exception e) {
			return new BaseResponceDto(e.getMessage());
		}
	}
	@GetMapping("/api/properties/{propertyId}")
	public Property displayById(@PathVariable int propertyId){
		Property property=propertyService.findById(propertyId);
		return  property;
	}
	// agentDashboard-backend-update
	// AgentDashboard-approvedCount
//	@GetMapping("/{agentId}/count/approved")
//	public long getApprovedCountById(@PathVariable long agentId) {
//		return propertyRepository.countByAgentIdAndVerificationStatus(agentId,
//				"Approved");
//	}

	// AgentDashboard-soldCount
//	@GetMapping("/{agentId}/count/sold")
//	public long getSoldCountById(@PathVariable long agentId) {
//		return propertyRepository.countByAgentIdAndVerificationStatus(agentId,
//				"Sold");
//	}

	// AgentDashboard-eachAgentpropertycount
//	@GetMapping("/{agentId}/count/property")
//	public long getTotalPropertiesByAgentId(@PathVariable long agentId) {
//		return propertyRepository.countByAgentId(agentId);
//	}

	// AgentDashboard-propertyofeachagent
//	@GetMapping("/{agentId}/properties")
//	public List<Property> getPropertiesByAgentId(@PathVariable long agentId) {
//		return propertyRepository.findByAgentId(agentId);
//	}

	// AgentDashboard-AvailableforRent
//	@GetMapping("/{agentId}/count/availableRent")
//	public long getAvailableRentByAgentId(@PathVariable long agentId) {
//		return propertyRepository.countByAgentIdAndStatusAndVerificationStatus(agentId,
//				"rent", "Approved");
//	}

	// AgentDashboard-Availableforsale
//	@GetMapping("/{agentId}/count/availableSale")
//	public long getAvailableSaleByAgentId(@PathVariable long agentId) {
//		return propertyRepository.countByAgentIdAndStatusAndVerificationStatus(agentId,
//				"Sale", "Approved");
//	}

	// AgentDashboard-TotalRentcount
//	@GetMapping("/{agentId}/count/totalRented")
//	public long getTotalRentedPropertiesByAgentId(@PathVariable long agentId) {
//		return propertyRepository.countByAgentIdAndStatusAndVerificationStatus(agentId,
//				"rent", "sold");
//	}

	// AgentDashboard-successPercentage

//	@GetMapping("/{agentId}/successPercentage")
//	public ResponseEntity<Double> getAgentSuccessPercentage(@PathVariable long agentId) {
//		double successPercentage = PropertyService.calculateSuccessPercentage(agentId);
//		return ResponseEntity.ok(successPercentage);
//	}

	// AgentDashboard-Propertyviewcount
//	@PostMapping("/{id}/viewsProperty")
//	public List<Integer> addPropertyView(@PathVariable long id) {
//
//		Calendar cal = Calendar.getInstance();
//		int currentMonth = cal.get(Calendar.MONTH);
//
//		String propertyIdStr = String.valueOf(id);
//		List<Integer> propertyViewsData = viewsData.getOrDefault(propertyIdStr, new ArrayList<>());
//		if (currentMonth < propertyViewsData.size()) {
//			propertyViewsData.set(currentMonth, propertyViewsData.get(currentMonth) + 1);
//		} else {
//			int diff = currentMonth - propertyViewsData.size();
//			for (int i = 0; i < diff; i++) {
//				propertyViewsData.add(0);
//			}
//			propertyViewsData.add(1);
//		}
//
//		viewsData.put(propertyIdStr, propertyViewsData);
//		return propertyViewsData;
//	}

	// @GetMapping("/{id}/viewsProperty")
	// public List<Integer> getpropertyViewsData(@PathVariable long id) {
	// String propertyIdStr = String.valueOf(id);
	// return viewsData.getOrDefault(propertyIdStr, new ArrayList<>());
	// }

}
