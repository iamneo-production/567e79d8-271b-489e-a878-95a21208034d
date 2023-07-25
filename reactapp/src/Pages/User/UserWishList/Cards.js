import React from "react";
import CardUi from "./CardUi";
import { useState } from "react";
import "./CardUi.css";
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
  const [favouritesList, setFavouritesList] = useState(favourites);
  const handleDelete = (id) => {
    const temp = favouritesList.filter((item) => {
      if (id !== item.favouriteId) {
        return item;
      }
    });
    setFavouritesList(temp);
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
