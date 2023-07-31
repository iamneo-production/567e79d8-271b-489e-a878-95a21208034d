package com.example.springapp.service;

import com.example.springapp.model.Payment;

import org.springframework.stereotype.Service;
import com.razorpay.RazorpayClient;
import com.razorpay.Order;
import org.json.JSONObject;

@Service
public class PaymentService {
    private static final String KEY="rzp_test_KfxF88Jn2LxBV3";
    private static final String SECRET_KEY="1SQgPhvYsXdwJ2WMhz7DVY4c";
    private static final String CURRENCY="INR";
    public Payment createTransaction(Double amount){
        try{
            amount*=100;
            JSONObject jsonObject= new JSONObject();
            jsonObject.put("amount",amount);
            jsonObject.put("currency",CURRENCY);
            RazorpayClient razorpayClient=new RazorpayClient(KEY,SECRET_KEY);
            Order order=razorpayClient.orders.create(jsonObject);
            return prepareTransaction(order);
        }
        catch(Exception e){
            System.out.println(e.getMessage());
        }
        return  null;
    }
    private Payment prepareTransaction(Order order){
        Long id= 1L;
        String orderId=order.get("id");
        String currency=order.get("currency");
        int val=order.get("amount");
        Double amount= (double) val;
        Payment payment=new Payment(id,orderId,currency,amount,KEY);
        return payment;

    }

}
