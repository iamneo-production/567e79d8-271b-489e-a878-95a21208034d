package com.example.springapp.controller;

import com.example.springapp.dto.BuyerDto;
import com.example.springapp.dto.BuyerImgDto;
import com.example.springapp.dto.PassDto;
import com.example.springapp.model.Buyer;
import com.example.springapp.model.BuyerHistory;
import com.example.springapp.repository.BuyerHistoryRepository;
import com.example.springapp.repository.BuyerRepository;
import com.example.springapp.service.BuyerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class BuyerController {

    @Autowired
    private BuyerService buyerService;

    @Autowired
    private BuyerRepository buyerRepo;

    @Autowired
    private BuyerHistoryRepository buyerHisRepo;



    // Show buyer by id
    @GetMapping("/user/{id}")
    public Optional<Buyer> showbuyerbyid(@PathVariable Long id)
    {
        return buyerService.alluserbyid(id);
    }

    // Update buyer details by id
    @PutMapping("/users/{id}")
    public Buyer updatebuyerid(@PathVariable Long id,@RequestBody BuyerDto user)
    {
        return buyerService.updateuser(id, user);
    }

    // Update buyer profile picture by id
    @PutMapping("/user/dp/{id}")
    public Buyer changepic(@PathVariable Long id,@RequestBody BuyerImgDto user)
    {
        return buyerService.updatedp(id, user);
    }

    // Delete buyer by id
    @DeleteMapping("/user/delete/{id}")
    public String accountDelete(@PathVariable Long id)
    {
        return buyerService.deletebyid(id);
    }

    // Update password by id
    @PutMapping("pass/{id}")
    public Buyer changepass(@PathVariable Long id,@RequestBody PassDto pass)
    {
        return buyerService.pass(id, pass);
    }

    // Add Buyer Search history by id
    @PostMapping("/{userId}/addHistory")
    public ResponseEntity<String> addSearchHistoryToUser(@PathVariable Long userId, @RequestBody String searchTitle) {
        try {
            Buyer buyer = buyerRepo.findById(userId).orElse(null);

            if (buyer == null) {
                return ResponseEntity.notFound().build();
            }

            BuyerHistory newHistory = new BuyerHistory();
            newHistory.setTitle(searchTitle);
            newHistory.setBuyer(buyer);
            buyerHisRepo.save(newHistory);

            return ResponseEntity.ok("Search history added successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding search history.");
        }
    }

    // Find history by id
    @GetMapping("/users/{userId}/histories")
    public ResponseEntity<List<BuyerHistory>> getSearchHistoriesByUserId(@PathVariable Long userId) {
        List<BuyerHistory> searchHistories = buyerHisRepo.findByUserId(userId);
        return ResponseEntity.of(Optional.ofNullable(searchHistories));
    }
}
