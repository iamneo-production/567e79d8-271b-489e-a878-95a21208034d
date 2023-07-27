package com.example.springapp.controller;

//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.springapp.model.Property;
import com.example.springapp.service.PropertyService;

import java.util.Optional;
import java.util.List;

@RestController
@RequestMapping("/api")
public class PropertyController {

    private final PropertyService propertyService;

    // private final PropertyServiceProvider propertyServiceProvider;

    @Autowired
    public PropertyController(PropertyService propertyService) {
        this.propertyService = propertyService;
    }

    @PostMapping("/properties")
    public Property addProperty(@RequestBody Property property) {
        return propertyService.saveProperty(property);
    }

}
