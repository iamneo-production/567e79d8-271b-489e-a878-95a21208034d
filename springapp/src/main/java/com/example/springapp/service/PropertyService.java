package com.xadmin.SpringBootCrud.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xadmin.SpringBootCrud.bean.Property;
import com.xadmin.SpringBootCrud.repository.PropertyRepository;

@Service

public class PropertyService {
	
	@Autowired
	
	public PropertyRepository propertyRepo;
	
	public List<Property> getAllProperties()
	{
		List<Property> properties = new ArrayList<>();
		propertyRepo.findAll().forEach(properties::add);
		return properties;
	}

	public void addProperty(Property property) {
		propertyRepo.save(property);
		
	}


	public void updateProperty(String id, Property property) {
		
		propertyRepo.save(property);
		
	}

	public void deleteProperty(String id) {
		propertyRepo.deleteById(id);
		
	}

}
