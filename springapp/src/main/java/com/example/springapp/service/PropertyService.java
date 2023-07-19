package com.example.springapp.service;

import org.springframework.stereotype.Service;

import com.example.springapp.model.Property;
import com.example.springapp.repository.PropertyRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PropertyService {
    private final PropertyRepository propertyrepo;

    public AgentService(PropertyRepository propertyrepo) {
        this.propertyrepo = propertyrepo;
    }

    public List<Property> getallproperty() {
        return propertyrepo.findAll();
    }

    public Optional<Property> getpropertybyid(Long id) {
        return propertyrepo.findById(id);
    }
}
