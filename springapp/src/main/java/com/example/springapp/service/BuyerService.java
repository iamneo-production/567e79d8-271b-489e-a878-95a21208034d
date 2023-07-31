package com.example.springapp.service;

import com.example.springapp.dto.BuyerDto;
import com.example.springapp.dto.BuyerImgDto;
import com.example.springapp.dto.PassDto;
import com.example.springapp.model.Buyer;
import com.example.springapp.repository.BuyerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BuyerService {

    @Autowired
    private BuyerRepository Buyerrepo;

    // Find Buyer by id
    public Optional<Buyer> alluserbyid(Long id) {
        return Buyerrepo.findById(id);
    }

    // Update Buyer by id
    public Buyer updateuser(Long id, BuyerDto user) {
        Optional<Buyer> foundbyid = Buyerrepo.findById(id);

        Buyer alreadyPresentData = foundbyid.get();

        if (user.getName() != null && !user.getName().isEmpty()) {

            alreadyPresentData.setName(user.getName());
        }
        if (user.getAddress() != null && !user.getAddress().isEmpty()) {

            alreadyPresentData.setAddress(user.getAddress());
        }

        if (user.getBio() != null && !user.getBio().isEmpty()) {

            alreadyPresentData.setBio(user.getBio());
        }

        if (user.getPhone() != null && !user.getPhone().isEmpty()) {

            alreadyPresentData.setPhone(user.getPhone());
        }

        if (user.getGender() != null && !user.getGender().isEmpty()) {

            alreadyPresentData.setGender(user.getGender());
        }
        return Buyerrepo.save(alreadyPresentData);
    }


    // Update Buyer profile picture by id
    public Buyer updatedp(Long id, BuyerImgDto user) {
        Optional<Buyer> person = Buyerrepo.findById(id);

        Buyer imgchanger = person.get();

        if (user.getImgurl() != null && !user.getImgurl().isEmpty()) {

            imgchanger.setImgurl(user.getImgurl());
        }
        return Buyerrepo.save(imgchanger);
    }

    //Update Buyer password
    public Buyer pass(Long id, PassDto pass)
    {
        Optional<Buyer> dater= Buyerrepo.findById(id);

        Buyer in=dater.get();
        in.setPassword(pass.getPassword());

        return Buyerrepo.save(in);
    }

    // Delete account by id
    public String deletebyid(Long id) {
        Buyerrepo.deleteById(id);
        return "Account deleted";
    }

}
