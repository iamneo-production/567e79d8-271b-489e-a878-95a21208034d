package com.example.springapp.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "user_wishlist")
public class UserWishList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name="property_id")
    private Long propertyId;
    @Column(name="user_id")
    private Long userId;
    @Column(name = "date_saved")
    private Date date;
    public UserWishList(){}

    public UserWishList(Long propertyId, Long userId, Date date) {
        this.propertyId = propertyId;
        this.userId = userId;
        this.date = date;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Long getPropertyId() {
        return propertyId;
    }

    public void setPropertyId(Long propertyId) {
        this.propertyId = propertyId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "UserWishList{" +
                "id=" + id +
                ", propertyId=" + propertyId +
                ", userId=" + userId +
                ", date=" + date +
                '}';
    }
}
