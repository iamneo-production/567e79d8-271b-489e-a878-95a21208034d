import React from "react";
import { Button } from "react-bootstrap";
import "./CardUi.css";
import ContactAgent from "../../Components/ContactAgent";
const CardUi = ({ favourite, handleDelete }) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div>
      <div className="card ">
        <div className="overflow">
          <img
            src={favourite.src}
            alt="Property Image"
            className="card-img-top"
          />
        </div>
        <div className="card-body">
          <h4
            className="card-title"
            style={{
              fontSize: "22px",
              fontWeight: "400",
            }}
          >
            {favourite.title}
          </h4>

          <p
            class="card-text"
            style={{
              fontWeight: "700",
              fontSize: "17px",
            }}
          >
            ₹{favourite.price}{" "}
            <span
              style={{
                fontWeight: "400",
                color: "#4169e1",
              }}
            >
              ({favourite.status})
            </span>
            <br />
            <span
              style={{
                fontWeight: "300",
                fontSize: "15px",
              }}
            >{` Added on ${favourite.date.getDate()} ${
              monthNames[favourite.date.getMonth()]
            } ${favourite.date.getFullYear()}`}</span>
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {/*<Button variant="outline-primary">Contact Agent</Button>*/}
          <ContactAgent Agent={favourite.Agent} />
          <Button
            variant="outline-danger"
            onClick={() => handleDelete(favourite.favouriteId)}
          >
            Remove from WishList
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardUi;
