package com.example.springapp.controller;

import com.example.springapp.model.AfterPayment;
import com.example.springapp.service.AfterPaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class AfterPaymentController {
    private AfterPaymentService afterPaymentService;
    @Autowired
    public AfterPaymentController(AfterPaymentService afterPaymentService){
        this.afterPaymentService=afterPaymentService;
    }
    @PostMapping("/payment")
    public AfterPayment save(@RequestBody AfterPayment afterPayment){
        afterPayment.setId(Long.valueOf(0));
        AfterPayment newPayment=afterPaymentService.save(afterPayment);
        return  newPayment;
    }
}
