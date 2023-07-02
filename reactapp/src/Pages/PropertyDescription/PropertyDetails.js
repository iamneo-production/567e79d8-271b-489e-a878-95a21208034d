import React from "react";
import Header from "./PropertyDetailsHeader/Header";
import Content from "./Content/Content";
import PropertyDisplay from "./PropertyDisplay/PropertyDisplay";
import "./PropertyDetails.css";
const PropertyDetails = () => {
  const property = {
    propertyId: 1,
    title: "3BHK-Single Floor Villa",
    description:
      "New House for Sale . 5cent land and 1400 sqft 3 bed room(1 attached+ 1 common toilet) . Open well water available 2 car parking space Porch, sit out , living room,dining room, kitchen, inverter and hot water provision ",
    address: {
      street: "12 Big Street",
      city: "Big City ,Chennai",
      pinCode: "600055",
    },
    price: "50000",
    type: "villa",
    status: "sale",
    specifications: {
      bedroom: "3 bedrooms",
      bathroom: "2 (1 attached+ 1 common toilet)",
      parking: "2 car parking space",
      area: "1440 sqft",
      amenities: "swimming pool garden balcony backyard",
    },
    Agent: {
      agentId: 1,
      agentName: "AgentName",
      email: "agent@gmail.com",
      contactNo: "+911234567890",
      url: "images/img9.png",
    },
  };

  return (
    <div className="property-details">
      <div className="container main-container">
        <div className="row main-row">
          <div className="col-sm-12 col-md-12 col-lg-6 main-item1">
            <PropertyDisplay />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 main-item2">
            <Header property={property} />
            <Content property={property} />
          </div>
        </div>
      </div>
      {/*<PropertyDisplay />
      <Content property={property} />*/}
    </div>
  );
};

export default PropertyDetails;
