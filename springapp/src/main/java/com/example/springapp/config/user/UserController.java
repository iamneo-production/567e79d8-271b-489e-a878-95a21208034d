package com.example.springapp.config.user;


import com.example.springapp.BaseResponceDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
public class UserController {

    @Autowired
    UserService userService;
    @PostMapping("/api/auth/register")
    public BaseResponceDto registerUser(@RequestBody User newUser){
        if(userService.createUser(newUser)){
            return new BaseResponceDto("success");
        }else {
            return new BaseResponceDto("failed");
        }

    }

    @PostMapping("/api/auth/login")
    public BaseResponceDto loginUser(@RequestBody UserLoginDto loginDetails){
        if(userService.checkUserNameExists(loginDetails.getEmail())){
            if(userService.verifyUser(loginDetails.getEmail(),loginDetails.getPassword())){
                Map<String,Object> data = new HashMap<>();
                data.put("token",userService.generateToke(loginDetails.getEmail(),loginDetails.getPassword()));
                data.put("userData",userService.loadUserByUsername(loginDetails.getEmail()));
                return new BaseResponceDto("Login successfull",data);
            }else {
                return new BaseResponceDto("Invalid credentials");
            }
        }else {
            return new BaseResponceDto("User does not exist");
        }
    }


}
