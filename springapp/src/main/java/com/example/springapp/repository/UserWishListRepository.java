package com.example.springapp.repository;

import com.example.springapp.model.UserWishList;

import java.util.List;

public interface UserWishListRepository {
    public List<UserWishList> findByUserId(int id);
    public UserWishList addNewFavourite(UserWishList userWishList);
    public void deleteById(int id);
    public UserWishList find(int userId,int propertyId);
}
