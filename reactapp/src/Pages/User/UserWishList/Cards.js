import React from "react";
import CardUi from "./CardUi";
import { useState,useEffect } from "react";
import "./CardUi.css";
import { API_BASE_URL } from "../../../Config";
import { del, get, post } from "../../../Config/services";
const Cards = () => {
  const favourites = [
    {
      favouriteId: 1,
      title: "3BHK-Single Floor Villa",
      price: "50000",
      type: "villa",
      status: "Sale",
      propertyid: 1,
      src: "images/img1.jpg",
      date: new Date(),
      Agent: {
        agentId: 1,
        agentName: "AgentName",
        email: "agent@gmail.com",
        contactNo: "+911234567890",
        url: "images/img9.png",
      },
    },
    {
      favouriteId: 2,
      title: "3BHK-Single Floor Villa",
      price: "50000",
      type: "villa",
      status: "Sale",
      propertyid: 1,
      src: "images/img2.jpg",
      date: new Date(),
      Agent: {
        agentId: 1,
        agentName: "AgentName",
        email: "agent@gmail.com",
        contactNo: "+911234567890",
        url: "images/img9.png",
      },
    },
    {
      favouriteId: 3,
      title: "3BHK-Single Floor Villa",
      price: "50000",
      type: "villa",
      status: "Rent",
      propertyid: 1,
      src: "images/img3.jpg",
      date: new Date(),
      Agent: {
        agentId: 1,
        agentName: "AgentName",
        email: "agent@gmail.com",
        contactNo: "+911234567890",
        url: "images/img9.png",
      },
    },
    {
      favouriteId: 4,
      title: "3BHK-Single Floor Villa",
      price: "50000",
      type: "villa",
      status: "Leese",
      propertyid: 1,
      src: "images/img4.jpg",
      date: new Date(),
      Agent: {
        agentId: 1,
        agentName: "AgentName",
        email: "agent@gmail.com",
        contactNo: "+911234567890",
        url: "images/img9.png",
      },
    },
    {
      favouriteId: 5,
      title: "3BHK-Single Floor Villa",
      price: "50000",
      type: "villa",
      status: "Sale",
      propertyid: 1,
      src: "images/img5.jpg",
      date: new Date(),
      Agent: {
        agentId: 1,
        agentName: "AgentName",
        email: "agent@gmail.com",
        contactNo: "+911234567890",
        url: "images/img9.png",
      },
    },
  ];
  
  const API_URL=`${API_BASE_URL}/api/userwishlist/`;
  const [favouritesList, setFavouritesList] = useState([]);
  const userId=3;
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await get(API_URL + userId);
        const listItems = await response;
        console.log(listItems);
        const Property_URL = `${API_BASE_URL}/api/properties/`;
        const updatedFavourites = await Promise.all(
          listItems.map(async (favItem) => {
            const propertyResponse = await get(Property_URL + favItem.propertyId);
            const propertyList = await propertyResponse;
            const favourite = {
              favouriteId: favItem.id,
              title: propertyList.title,
              price: propertyList.price,
              type: propertyList.type,
              status: propertyList.status,
              propertyid: favItem.propertyId,
              src: "images/img5.jpg",
              date: new Date(favItem.date),
              agent:propertyList.agent,
              NewAgent: {
                agentId: 1,
                agentName: "AgentName",
                email: "agent@gmail.com",
                contactNo: "+911234567890",
                url: "images/img9.png",
              },
            };
            return favourite;
          })
        );
        setFavouritesList(updatedFavourites);
      } catch (err) {
        console.log(err.stack);
      }
    };
  
    fetchItems();
  }, []);
  
  const handleDelete = async (id) => {
    const temp = favouritesList.filter((item) => {
      if (id !== item.favouriteId) {
        return item;
      }
    });
    setFavouritesList(temp);
    const DEL_URL=`${API_BASE_URL}/api/userwishlist/`+id;
    const deleteOptions={
      method:"DELETE"
    }
    const result=await del(DEL_URL);
  };

  return (
    <div>
      <h3 className="fav-header">Your Wishlist</h3>
      {favouritesList.length ? (
        <div className="container-fluid  justify-content-center">
          <div className="row">
            {favouritesList.map((favourite) => {
              return (
                <div className="col-sm-12 col-md-6 col-lg-3  ">
                  <CardUi favourite={favourite} handleDelete={handleDelete} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <p className="empty-text">Your Wishlist List is empty</p>
      )}
    </div>
  );
};

export default Cards;
