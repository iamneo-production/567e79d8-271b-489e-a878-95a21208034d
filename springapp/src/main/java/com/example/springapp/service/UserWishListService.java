package com.example.springapp.service;

import com.example.springapp.model.UserWishList;

import java.util.List;

public interface UserWishListService {
    public List<UserWishList> findbyid(int id);
    public UserWishList save(UserWishList userWishList);
    public void deleteById(int id);
    public UserWishList find(int userId,int propertyId);
}
