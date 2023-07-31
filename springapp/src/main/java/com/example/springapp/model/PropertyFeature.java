package com.example.springapp.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.example.springapp.model.PropertyFeature;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import javax.persistence.*;

import java.util.List;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.CascadeType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import javax.persistence.JoinColumn;

@Entity
public class PropertyFeature {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String waterSupply;
    private String swimmingPool;
    private String gym;
    private String playGround;
    private String Elevator;
    private String Garden;
    private String location;
    private String bed;
    private String bath;
    private String rent;



    @ManyToOne
    @JsonBackReference
    private Property property;

    public PropertyFeature() {
    }

    public PropertyFeature(Long id, String waterSupply, String swimmingPool, String gym, String playGround,
            String elevator, String garden, Property property, String location, String bed, String bath, String rent) {
        this.id = id;
        this.waterSupply = waterSupply;
        this.swimmingPool = swimmingPool;
        this.gym = gym;
        this.playGround = playGround;
        Elevator = elevator;
        Garden = garden;
        this.property = property;
        this.location = location;
        this.bed = bed;
        this.bath = bath;
        this.rent = rent;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getWaterSupply() {
        return waterSupply;
    }

    public void setWaterSupply(String waterSupply) {
        this.waterSupply = waterSupply;
    }

    public String getSwimmingPool() {
        return swimmingPool;
    }

    public void setSwimmingPool(String swimmingPool) {
        this.swimmingPool = swimmingPool;
    }

    public String getGym() {
        return gym;
    }

    public void setGym(String gym) {
        this.gym = gym;
    }

    public String getPlayGround() {
        return playGround;
    }

    public void setPlayGround(String playGround) {
        this.playGround = playGround;
    }

    public String getElevator() {
        return Elevator;
    }

    public void setElevator(String elevator) {
        Elevator = elevator;
    }

    public String getGarden() {
        return Garden;
    }

    public void setGarden(String garden) {
        Garden = garden;
    }

    public Property getProperty() {
        return property;
    }

    public void setProperty(Property property) {
        this.property = property;
    }

    public String getlocation() {
        return location;
    }

    public String getbed() {
        return bed;
    }

    public String getbath() {
        return bath;
    }

    public String getrent() {
        return rent;
    }
}
