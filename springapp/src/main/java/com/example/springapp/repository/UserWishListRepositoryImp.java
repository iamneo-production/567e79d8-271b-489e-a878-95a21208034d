package com.example.springapp.repository;

import com.example.springapp.model.UserWishList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import java.util.List;

@Repository
public class UserWishListRepositoryImp implements UserWishListRepository{
    private EntityManager em;
    @Autowired
    public UserWishListRepositoryImp(EntityManager em){
        this.em=em;
    }

    @Override
    public List<UserWishList> findByUserId(int id) {
        TypedQuery<UserWishList> theQuery=em.createQuery("From UserWishList where userId=:theData",UserWishList.class);
        theQuery.setParameter("theData",Long.valueOf(id));
        return theQuery.getResultList();
    }
    @Override
    public UserWishList find(int userId, int propertyId) {
        TypedQuery<UserWishList> theQuery=em.createQuery("From UserWishList where userId=:theData and propertyId=:otherData",UserWishList.class);
        theQuery.setParameter("theData",Long.valueOf(userId));
        theQuery.setParameter("otherData",Long.valueOf(propertyId));
        return theQuery.getSingleResult();


    }

    @Override
    @Transactional
    public UserWishList addNewFavourite(UserWishList userWishList) {
        UserWishList userWishList1=em.merge(userWishList);
        return userWishList1;
    }

    @Override
    @Transactional
    public void deleteById(int id) {
        UserWishList userWishList=em.find(UserWishList.class,id);
        em.remove(userWishList);
    }
}
