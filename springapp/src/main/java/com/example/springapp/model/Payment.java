package com.example.springapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "payment")
public class Payment {
    @Id
    @Column(name = "id")
    private Long id;
    @Column(name = "order_id")
    private String orderId;
    @Column(name="currency")
    private String currency;
    @Column(name = "amount")
    private Double amount;
    @Column(name = "razor_key")
    private String key;
    public Payment(){}

    public Payment(Long id, String orderId, String currency, Double amount, String key) {
        this.id = id;
        this.orderId = orderId;
        this.currency = currency;
        this.amount = amount;
        this.key = key;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    @Override
    public String toString() {
        return "Payment{" +
                "id=" + id +
                ", orderId='" + orderId + '\'' +
                ", currency='" + currency + '\'' +
                ", amount=" + amount +
                ", key='" + key + '\'' +
                '}';
    }
}
