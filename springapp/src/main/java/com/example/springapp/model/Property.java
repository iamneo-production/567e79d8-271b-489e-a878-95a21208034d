package com.example.springapp.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String description;
    private String address;
    private Double price;
    private String type;
    private String status;
    private String bed;
    private String bath;
    private String rent;

    @ManyToOne
    @JsonBackReference
    private Agent agent;

    @OneToMany(mappedBy = "property")
    @JsonManagedReference
    private List<PropertyImage> ImageUrls;

    @OneToMany(mappedBy = "property")
    @JsonManagedReference
    private List<PropertyVideo> VideoUrls;

    @OneToMany(mappedBy = "property")
    @JsonManagedReference
    private List<PropertyFeature> features;

    public Property() {
    }

    public Property(Long id, String title, String description, String address, Double price, String type, String status,
            Agent agent, List<PropertyImage> ImageUrls, List<PropertyVideo> VideoUrls, List<PropertyFeature> features) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.address = address;
        this.price = price;
        this.type = type;
        this.status = status;
        this.agent = agent;
        this.ImageUrls = ImageUrls;
        this.VideoUrls = VideoUrls;
        this.features = features;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Agent getAgent() {
        return agent;
    }

    public void setAgent(Agent agent) {
        this.agent = agent;
    }

    public List<PropertyImage> getImageUrls() {
        return ImageUrls;
    }

    public void setImageUrls(List<PropertyImage> ImageUrls) {
        this.ImageUrls = ImageUrls;
    }

    public List<PropertyVideo> getVideoUrls() {
        return VideoUrls;
    }

    public void setVideoUrls(List<PropertyVideo> VideoUrls) {
        this.VideoUrls = VideoUrls;
    }

    public List<PropertyFeature> getFeatures() {
        return features;
    }

    public void setFeatures(List<PropertyFeature> features) {
        this.features = features;
    }
}