package com.example.springapp.model;

import com.example.springapp.config.user.User;

import javax.persistence.*;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
    @JoinColumn(name = "agent_id")
    private User agent;

    @OneToMany(mappedBy = "property")
    @JsonManagedReference
    private List<PropertyImage> imageUrls;

    @OneToMany(mappedBy = "property")
    @JsonManagedReference
    private List<PropertyVideo> videoUrls;

    @OneToMany(mappedBy = "property")
    @JsonManagedReference
    private List<PropertyFeature> features;

    public Property() {
    }

    public Property(Long id, String title, String description, String address, Double price, String type, String status,
            Agent agent, List<PropertyImage> imageUrls, List<PropertyVideo> videoUrls, List<PropertyFeature> features) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.address = address;
        this.price = price;
        this.type = type;
        this.status = status;
//        this.agent = agent;
        this.imageUrls = imageUrls;
        this.videoUrls = videoUrls;
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

    public User getAgent() {
        return agent;
    }

    public void setAgent(User agent) {
        this.agent = agent;
    }

    public List<PropertyImage> getImageUrls() {
        return imageUrls;
    }

    public void setImageUrls(List<PropertyImage> imageUrls) {
        this.imageUrls = imageUrls;
    }

    public List<PropertyVideo> getVideoUrls() {
        return videoUrls;
    }

    public void setVideoUrls(List<PropertyVideo> videoUrls) {
        this.videoUrls = videoUrls;
    }

    public List<PropertyFeature> getFeatures() {
        return features;
    }

    public void setFeatures(List<PropertyFeature> features) {
        this.features = features;
    }
}
