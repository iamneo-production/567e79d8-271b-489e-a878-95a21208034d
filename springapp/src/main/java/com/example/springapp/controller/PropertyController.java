package com.example.springapp.controller;

import java.util.List;

import com.example.springapp.BaseResponceDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.springapp.model.Property;
import com.example.springapp.service.PropertyService;

@RestController
public class PropertyController {
	
	
	@Autowired
	private PropertyService propertyService;

	@PostMapping("api/agent/property")
	public BaseResponceDto createProperty(@RequestParam(value = "agentId") String agentId, @RequestBody Property property){
		try{
			propertyService.addProperty(property,Long.parseLong(agentId));
			return new BaseResponceDto("success");
		}catch (Exception e){
			return new BaseResponceDto(e.getMessage());
		}
	}

	@PutMapping("api/agent/property")
	public BaseResponceDto updateProperty(@RequestParam(value = "propertyId") String propertyId, @RequestBody Property property){
		try{
			propertyService.updateProperty(Long.parseLong(propertyId),property);
			return new BaseResponceDto("success");
		}catch (Exception e){
			return new BaseResponceDto(e.getMessage());
		}
	}

	@DeleteMapping("api/agent/property")
	public BaseResponceDto deleteProperty(@RequestParam(value = "propertyId") String propertyId){
		try{
			propertyService.deleteProperty(Long.parseLong(propertyId));
			return new BaseResponceDto("success");
		}catch (Exception e){
			return new BaseResponceDto(e.getMessage());
		}
	}

	@GetMapping("api/property/all")
	public BaseResponceDto getAllProperty(){
		try{
			return new BaseResponceDto("success",propertyService.getAllProperties());
		}catch (Exception e){
			return new BaseResponceDto(e.getMessage());
		}
	}

	@GetMapping("api/property")
	public BaseResponceDto getPropertyById(@RequestParam(value = "propertyId") String propertyId ){
		try{
			return new BaseResponceDto("success",propertyService.getPropertyById(Long.parseLong(propertyId)));
		}catch (Exception e){
			return new BaseResponceDto(e.getMessage());
		}
	}

	@GetMapping("api/property/location")
	public BaseResponceDto getPropertyByLocation(@RequestParam(value = "location") String location ){
		try{
			return new BaseResponceDto("success",propertyService.getPropertyByLocation(location));
		}catch (Exception e){
			return new BaseResponceDto(e.getMessage());
		}
	}


}
