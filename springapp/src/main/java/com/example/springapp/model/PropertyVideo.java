package com.example.springapp.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.example.springapp.model.PropertyVideo;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import java.util.List;
import javax.persistence.OneToMany;
import javax.persistence.ManyToOne;
import javax.persistence.CascadeType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import javax.persistence.JoinColumn;

@Entity
public class PropertyVideo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String video;

    @ManyToOne
    @JsonBackReference
    private Property property;

    public PropertyVideo() {
    }

    public PropertyVideo(Long id, String video, Property property) {
        this.id = id;
        this.video = video;
        this.property = property;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getVideo() {
        return video;
    }

    public void setVideo(String video) {
        this.video = video;
    }

    public Property getProperty() {
        return property;
    }

    public void setProperty(Property property) {
        this.property = property;
    }

}