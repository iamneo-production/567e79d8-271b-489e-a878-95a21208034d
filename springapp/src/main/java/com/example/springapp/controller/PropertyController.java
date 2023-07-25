package com.xadmin.SpringBootCrud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.xadmin.SpringBootCrud.bean.Property;
import com.xadmin.SpringBootCrud.service.PropertyService;

@RestController
public class PropertyController {
	
	
	@Autowired
	private PropertyService propertyService;
	
	@RequestMapping("/Properties")
	public List<Property> getAllProperties()
	{
		return propertyService.getAllProperties();
	}
	@RequestMapping("/properties/count1")
	public int getCountPending(){
		return propertyService.findpending();
	}

	@RequestMapping("/properties/count2")
	public int getCountCancelled(){
		return propertyService.findcancelled();
	}
	
	
	@RequestMapping(method = RequestMethod.POST, value="/properties")
	public void addProperty(@RequestBody Property property)
	{
		propertyService.addProperty(property);
	}
	
	@RequestMapping(method = RequestMethod.PUT, value="/properties/{id}")
	public void updateProperty(@PathVariable String id, @RequestBody Property property)
	{
		propertyService.updateProperty(id, property);
	}
	
	
	@RequestMapping(method= RequestMethod.DELETE, value="/properties/{id}")
	public void DeleteProperty(@PathVariable String id)
	{
		propertyService.deleteProperty(id);
	}

}
