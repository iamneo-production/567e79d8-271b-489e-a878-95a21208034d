package com.example.springapp.service;

import com.example.springapp.model.UserWishList;
import com.example.springapp.repository.UserWishListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserWishListServiceImp implements UserWishListService{
    private UserWishListRepository userWishListRepository;
    @Autowired
    public UserWishListServiceImp(UserWishListRepository userWishListRepository){
        this.userWishListRepository=userWishListRepository;
    }

    @Override
    public List<UserWishList> findbyid(int id) {
        return userWishListRepository.findByUserId(id);
    }

    @Override
    public UserWishList save(UserWishList userWishList) {
        return userWishListRepository.addNewFavourite(userWishList);
    }

    @Override
    public UserWishList find(int userId, int propertyId) {
        return userWishListRepository.find(userId,propertyId);
    }

    @Override
    public void deleteById(int id) {
        userWishListRepository.deleteById(id);
    }
}
