import React from "react";
import { Button } from "react-bootstrap";
import { FaToilet, FaParking, FaRupeeSign, FaHouseUser } from "react-icons/fa";
import { TbRulerMeasure } from "react-icons/tb";
import { BiBed } from "react-icons/bi";

import ContactAgent from "../../User/ContactAgent";
const Content = ({ property }) => {
  return (
    <div
    /*style={{
        width: "45vw",
        height: "80vh",
      }}*/
    >
      <p className="overview">Overview of {property.title} :</p>
      <p>{property.description}</p>
      <section className="icon rupees-icon">
        <FaRupeeSign />
        <span className="price"> {property.price}/- only</span>
      </section>
      <section className="icon type-icon">
        <FaHouseUser />
        <span> For {property.status}</span>
      </section>
      <section className="icon bed-icon">
        <BiBed />
        <span> {property.specifications.bedroom}</span>
      </section>
      <section className="icon nath-icon">
        <FaToilet />
        <span> {property.specifications.bathroom}</span>
      </section>
      <section className="icon parking-icon">
        <FaParking />
        <span> {property.specifications.parking}</span>
      </section>
      <section className="icon area-icon">
        <TbRulerMeasure />
        <span> {property.specifications.area}</span>
      </section>

      <p className="amenities">Amenities:</p>
      <p>{property.specifications.amenities}</p>
      <Button variant="outline-primary">Buy Now !</Button>
      <span className="contact-button">
        <ContactAgent Agent={property.Agent} />
      </span>
    </div>
  );
};

export default Content;
