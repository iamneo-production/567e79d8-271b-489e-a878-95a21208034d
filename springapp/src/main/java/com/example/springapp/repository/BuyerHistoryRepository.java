package com.example.springapp.repository;

import com.example.springapp.model.BuyerHistory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BuyerHistoryRepository extends JpaRepository<BuyerHistory,Long> {

    List<BuyerHistory> findByUserId(Long userId);
}
