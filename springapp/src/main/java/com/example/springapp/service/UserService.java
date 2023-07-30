package com.example.springapp.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.springapp.model.User;
import com.example.springapp.repository.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private final UserRepository userrepo;

    public UserService(UserRepository userrepo) {
        this.userrepo = userrepo;
    }

    public List<User> getalluser() {
        return userrepo.findAll();
    }

    public Optional<User> getuserbyid(Integer id) {
        return userrepo.findById(id);
    }

}
