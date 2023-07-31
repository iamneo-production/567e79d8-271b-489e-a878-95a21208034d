import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaToilet, FaParking, FaRupeeSign, FaHouseUser } from "react-icons/fa";
import { TbRulerMeasure } from "react-icons/tb";
import { BiBed } from "react-icons/bi";

import ContactAgent from "../../User/ContactAgent";
import { API_BASE_URL } from "../../../Config";
import { get, post } from "../../../Config/services";
import { useEffect } from "react";
const Content = ({ property,Id }) => {
  const amount=(10000/100)*5;
  const token = localStorage.getItem("token");
  //console.log(Id);
  //const api_url="http://localhost:7070/api/users/";
  //const post_url="http://localhost:7070/api/payment";
  const api_url=`${API_BASE_URL}/api/users/${amount}`;
  const post_url=`${API_BASE_URL}/api/payment`;
  const Property_URL = `${API_BASE_URL}/api/properties/`;
  const [loadDisplay,setLoadDisplay]=useState({});
  useEffect(()=>{
    const fetchItems=async () => {
      try{
        const response= await get(Property_URL+Id);
        const listItems=await response;
        console.log(listItems);
        const display={
          title:listItems.title,
          description:listItems.description,
          status:listItems.status,
          price:listItems.price,
          agent:listItems.agent,
          type:listItems.type
        };
        console.log(display);
        setLoadDisplay(display);
      }
      catch(err){
        console.log(err.stack);
      }
    };
    fetchItems();
  },[Id, Property_URL]);
  const paynow= async ()=>{
      try{
          const res=await get(api_url);
          const transactionDetails=await res;
          //console.log(transactionDetails);
          console.log(res);
          //transactionDetails=res;
          var options = {
              "key": transactionDetails.key, 
              "amount": transactionDetails.amount, 
              "currency": "INR",
              "name": "sample payment", 
              "description": "Test Transaction",
              "image": "https://api.freelogodesign.org/assets/thumb/logo/9af3a9661c474e51b28a242f1c60c59c_400.png",
              "order_id": transactionDetails.order_id, 

              handler: function (resp) {
                  savedetails(resp);
                },
              "prefill": {
                  "name": "TestUser", 
                  "email": "testuser@example.com",
                  "contact": "9000090000"
              },
              "notes": {
                  "address": "Razorpay Corporate Office"
              },
              "theme": {
                  "color": "#3399cc"
              }
          };
          var pay=new window.Razorpay(options);
          pay.open();
          const savedetails = async (resp)=>{
              console.log(resp.razorpay_payment_id);
              const addNewPaymentDetail={"razorpayPaymentId":resp.razorpay_payment_id,"razorpayOrderId":transactionDetails.orderId,"amount":amount}
              const postOptions={
                  method:"POST",
                  headers:{
                      "Content-Type":"application/json",
                      ...(token ? { Authorization: `Bearer ${token}` } : {}),
                  },
                  body:JSON.stringify(addNewPaymentDetail)

              };
              const result=await post(post_url,addNewPaymentDetail);
              console.log(result);
              
          }
      }
      catch(err){
          console.log(err.stack);
      }
  }
  if (Object.keys(loadDisplay).length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div
    /*style={{
        width: "45vw",
        height: "80vh",
      }}*/
    >
      <p className="overview">Overview of {loadDisplay.title} :</p>
      <p>{loadDisplay.description}</p>
      <section className="icon rupees-icon">
        <FaRupeeSign />
        <span className="price"> {loadDisplay.price}/- only</span>
      </section>
      <section className="icon type-icon">
        <FaHouseUser />
        <span> For {loadDisplay.status}</span>
      </section>
      <br />
      <p className="amenities">Features:</p>
      {loadDisplay.type=="villa" || loadDisplay.type=="apartment" ? (
        <div>
        <section className="icon bed-icon">
        <BiBed />
        <span> {property.specifications.bedroom}</span>
      </section>
      <section className="icon nath-icon">
        <FaToilet />
        <span> {property.specifications.bathroom}</span>
      </section>
      </div>
      ):(
        <></>
      )}
      {loadDisplay.type=="villa" || loadDisplay.type=="apartment"  || loadDisplay.type=="building" ? (
      <section className="icon parking-icon">
        <FaParking />
        <span> {property.specifications.parking}</span>
      </section>
      ):(
        <></>
      )}
      <section className="icon area-icon">
        <TbRulerMeasure />
        <span> {property.specifications.area}</span>
      </section>

      
      {/* <p>{property.specifications.amenities}</p> */}
      <br />
      <Button variant="outline-primary" onClick={()=> paynow()}>Buy Now !</Button>
      <span className="contact-button">
        <ContactAgent agent={loadDisplay.agent} />
      </span>
    </div>
  );
};

export default Content;
