package com.example.springapp.service;

import com.example.springapp.model.AfterPayment;
import com.example.springapp.repository.AfterPaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AfterPaymentServiceImp implements AfterPaymentService {
    private AfterPaymentRepository afterPaymentRepository;
    @Autowired
    public AfterPaymentServiceImp(AfterPaymentRepository afterPaymentRepository){
        this.afterPaymentRepository=afterPaymentRepository;
    }

    @Override
    public AfterPayment save(AfterPayment afterPayment) {
        return afterPaymentRepository.addNewPayment(afterPayment);
    }
}
