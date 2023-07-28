package com.example.springapp.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.model.Property;
import com.example.springapp.repository.PropertyRepository;

@Service

public class PropertyService {
	
	@Autowired
	
	public static PropertyRepository propertyRepo;
	
	public List<Property> getAllProperties()
	{
		List<Property> properties = new ArrayList<>();
		propertyRepo.findAll().forEach(properties::add);
		return properties;
	}
	public int findpending(){
		int count=0;
		List<Property>properties=new ArrayList<>();
		propertyRepo.findAll().forEach(properties::add);
		for(int i=0;i<properties.size();i++){
			if(properties.get(i).getStatus().equals("Pending"))
				count++;
		}
		return count;
	}
	public int findcancelled(){
		int count=0;
		List<Property>properties=new ArrayList<>();
		propertyRepo.findAll().forEach(properties::add);
		for(int i=0;i<properties.size();i++){
			if(properties.get(i).getStatus().equals("Cancelled"))
				count=count+1;
		}
		return count;
	}

	public void addProperty(Property property) {
		propertyRepo.save(property);
		
	}


	public void updateProperty(long id, Property property) {
		
		propertyRepo.save(property);
		
	}

	public void deleteProperty(long id) {
		propertyRepo.deleteById(id);
		Long longValue = Long.valueOf(id);


	}

	public static double calculateSuccessPercentage(long agentId) {
        long totalProperties = propertyRepo.countByAgentId(agentId);
        long successfulProperties = propertyRepo.countByAgentIdAndVerificationStatus(agentId, "sold");
        return ((double) successfulProperties / totalProperties) * 100.0;
}


}
