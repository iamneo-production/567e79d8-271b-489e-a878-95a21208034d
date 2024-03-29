package com.example.springapp.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.Table;
import java.util.List;
import javax.persistence.OneToMany;
import javax.persistence.CascadeType;

@Entity
@Table(name = "Agent")
public class Agent {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String email;
    private String phone;
    private String description;
    private String profileImageUrl;

    @OneToMany(mappedBy = "agent", cascade = CascadeType.ALL)
    private List<Property> properties;

    public Agent() {
    }

    public Agent(Long id, String name, String email, String phone, String description, String profileImageUrl,
            List<Property> properties) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.description = description;
        this.profileImageUrl = profileImageUrl;
        this.properties = properties;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getProfileImageUrl() {
        return profileImageUrl;
    }

    public void setProfileImageUrl(String profileImageUrl) {
        this.profileImageUrl = profileImageUrl;
    }

    public List<Property> getProperties() {
        return properties;
    }

    public void setProperties(List<Property> properties) {
        this.properties = properties;
    }

}