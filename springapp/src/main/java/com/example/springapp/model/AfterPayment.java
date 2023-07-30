package com.example.springapp.model;

import javax.persistence.*;

@Entity
@Table(name="after_payment")
public class AfterPayment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "razorpay_payment_id")
    private String razorpayPaymentId;
    @Column(name="razorpay_order_id")
    private String razorpayOrderId;
    @Column(name = "amount")
    private Double amount;
    @Column(name = "property_type")
    private String proprtyType;
    public AfterPayment(){}

    public AfterPayment(String razorpayPaymentId, String razorpayOrderId, Double amount, String proprtyType) {
        this.razorpayPaymentId = razorpayPaymentId;
        this.razorpayOrderId = razorpayOrderId;
        this.amount = amount;
        this.proprtyType = proprtyType;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRazorpayPaymentId() {
        return razorpayPaymentId;
    }

    public void setRazorpayPaymentId(String razorpayPaymentId) {
        this.razorpayPaymentId = razorpayPaymentId;
    }

    public String getRazorpayOrderId() {
        return razorpayOrderId;
    }

    public void setRazorpayOrderId(String razorpayOrderId) {
        this.razorpayOrderId = razorpayOrderId;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public String getProprtyType() {
        return proprtyType;
    }

    public void setProprtyType(String proprtyType) {
        this.proprtyType = proprtyType;
    }

    @Override
    public String toString() {
        return "AfterPayment{" +
                "id=" + id +
                ", razorpayPaymentId='" + razorpayPaymentId + '\'' +
                ", razorpayOrderId='" + razorpayOrderId + '\'' +
                ", amount=" + amount +
                ", proprtyType='" + proprtyType + '\'' +
                '}';
    }
}
