package com.example.springapp.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.example.springapp.model.PropertyImage;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import java.util.List;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.CascadeType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import javax.persistence.JoinColumn;

@Entity
public class PropertyImage {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String image;

    @ManyToOne
    @JsonBackReference
    private Property property;

    public PropertyImage() {
    }

    public PropertyImage(Long id, String image, Property property) {
        this.id = id;
        this.image = image;
        this.property = property;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Property getProperty() {
        return property;
    }

    public void setProperty(Property property) {
        this.property = property;
    }
}
