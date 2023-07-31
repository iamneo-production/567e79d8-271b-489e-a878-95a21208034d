package com.example.springapp.controller;

import com.example.springapp.model.UserWishList;
import com.example.springapp.service.UserWishListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class UserWishListController {
    private UserWishListService userWishListService;
    @Autowired
    public  UserWishListController(UserWishListService userWishListService){
        this.userWishListService=userWishListService;
    }
    @GetMapping("/userwishlist/{userId}")
    public List<UserWishList> displayById(@PathVariable int userId){
        return userWishListService.findbyid(userId);
    }
    @GetMapping("/userwishlist/{userId}/{propertyId}")
    public Optional<UserWishList> getbypropertyId(@PathVariable int userId,@PathVariable int propertyId ){
        try{
            UserWishList userWishList=userWishListService.find(userId,propertyId);
            return Optional.ofNullable(userWishList);
        }
        catch (Exception e) {
            // Handle the exception (log or handle it as required)
            e.printStackTrace();
            return Optional.empty();
        }
    }
    @PostMapping("/userwishlist")
    public UserWishList save(@RequestBody UserWishList userWishList){
        java.util.Date currentDate=new java.util.Date();
        java.sql.Date sqlDate=new java.sql.Date(currentDate.getTime());
        userWishList.setDate(sqlDate);
        UserWishList userWishList1=userWishListService.save(userWishList);
        return  userWishList1;
    }
    @DeleteMapping("/userwishlist/{favouriteId}")
    public void deleteById(@PathVariable int favouriteId){
        userWishListService.deleteById(favouriteId);
    }
}
