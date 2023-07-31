package com.example.springapp.repository;

import com.example.springapp.model.AfterPayment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

@Repository
public class AfterPaymentRepositoryImp implements AfterPaymentRepository{
    private EntityManager em;
    @Autowired
    public AfterPaymentRepositoryImp(EntityManager em){
        this.em=em;
    }

    @Override
    @Transactional
    public AfterPayment addNewPayment(AfterPayment afterPayment) {
        AfterPayment theAfterPayment=em.merge(afterPayment);
        return theAfterPayment;
    }
}
