package com.example.springapp.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.example.springapp.config.user.User;
import com.example.springapp.config.user.UserRepository;
import com.example.springapp.model.Property;
import com.example.springapp.repository.PropertyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

@Service

public class PropertyService {

	@Autowired
	public PropertyRepository propertyRepo;

	@Autowired
	public UserRepository userRepository;

	public List<Property> getAllProperties() {
		return propertyRepo.findAll();
	}

//	public int findpending() {
//		int count = 0;
//		List<Property> properties = new ArrayList<>();
//		propertyRepo.findAll().forEach(properties::add);
//		for (int i = 0; i < properties.size(); i++) {
//			if (properties.get(i).getStatus().equals("Pending"))
//				count++;
//		}
//		return count;
//	}

//	public int findcancelled() {
//		int count = 0;
//		List<Property> properties = new ArrayList<>();
//		propertyRepo.findAll().forEach(properties::add);
//		for (int i = 0; i < properties.size(); i++) {
//			if (properties.get(i).getStatus().equals("Cancelled"))
//				count = count + 1;
//		}
//		return count;
//	}

	public void addProperty(Property property, Long agentId) {
		User agent = userRepository.findById(agentId).orElseThrow();
		property.setAgent(agent);
		propertyRepo.save(property);

	}

	public void updateProperty(Long id, Property updateProperty) {
		Property property = propertyRepo.findById(id).orElseThrow();
		property.setTitle(updateProperty.getTitle());
		property.setPrice(updateProperty.getPrice());
		property.setAddress(updateProperty.getAddress());
		property.setStatus(updateProperty.getStatus());
		property.setDescription(updateProperty.getDescription());
		propertyRepo.save(property);

	}

	public void deleteProperty(Long id) {
		Property property = propertyRepo.findById(id).orElseThrow();
		propertyRepo.delete(property);

	}

	public Property getPropertyById(long propertyId) {
		return propertyRepo.findById(propertyId).orElseThrow();
	}

	// find property by id
	@GetMapping("/api/properties/{prpertyId]")
	public Property findById(int propertyId){
		Optional<Property> result=propertyRepo.findById(Long.valueOf(propertyId));
		Property property=null;
		if(result.isPresent()){
			property=result.get();
		}
		else {
			throw  new RuntimeException("did not find property");
		}
		return property;
	}

	public List<Property> getPropertyByLocation(String location) {
		return propertyRepo.findByAddressContainingIgnoreCase(location);
	}

	// public static double calculateSuccessPercentage(long agentId) {
	// long totalProperties = propertyRepo.countByAgentId(agentId);
	// long successfulProperties =
	// propertyRepo.countByAgentIdAndVerificationStatus(agentId, "sold");
	// return ((double) successfulProperties / totalProperties) * 100.0;
	// }
}
