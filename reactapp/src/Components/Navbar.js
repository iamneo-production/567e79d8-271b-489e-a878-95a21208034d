import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="whole">
      <nav
        className="navbar navbar-expand-md  navbar-dark fixed-top"
        style={{
          background: "#003153",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">
            ADMIN LOGINPAGE
          </Link>
        </div>
        <div className="text-end">
          <Link
            className="Logout"
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
              paddingRight: "5px",
            }}
          >
            Homepage
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
