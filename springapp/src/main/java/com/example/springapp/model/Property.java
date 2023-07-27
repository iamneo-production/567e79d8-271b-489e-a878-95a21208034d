package com.example.springapp.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Property")
public class Property {

    @Id
    private Long id;
    private String title;
    private String description;
    private String address;
    private Double price;
    private String type;
    private String status;

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

    public Property(Long id, String title, String description, String address, Double price, String type,String status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.address = address;
        this.price = price;
        this.type = type;
        this.status=status;
    }

    public Property() {
    }

}
