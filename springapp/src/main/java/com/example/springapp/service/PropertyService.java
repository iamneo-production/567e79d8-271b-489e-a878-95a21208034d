package com.example.springapp.service;

import com.example.springapp.repository.PropertyRepository;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.springapp.model.Property;
import com.example.springapp.repository.PropertyRepository;

import java.util.List;
// import java.util.Optional;

@Service
public class PropertyService {

    public final PropertyRepository propertyrepo;

    @Autowired
    public PropertyService(PropertyRepository propertyrepo) {
        this.propertyrepo = propertyrepo;
    }

    public Property saveProperty(Property property) {
        return propertyrepo.save(property);
    }

}
