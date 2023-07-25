import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
import { FaCopyright } from "react-icons/fa";
import Logo from "../../assets/WhiteLogo.svg";

export default function Footer() {
  return (
    <Container fluid style={{ backgroundColor: "#202020" }}>
      <Row className="pt-5">
        <Col
          xs={6}
          sm={6}
          md={6}
          lg={6}
          className="d-flex justify-content-center align-items-center"
        >
          <img src={Logo} style={{ width: "40%" }} />
        </Col>
        <Col xs={2} sm={2} md={2} lg={2}>
          <p style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>
            About us
          </p>
          <a href="#home" style={{ textDecoration: "none" }}>
            <p style={{ color: "#fff", cursor: "pointer", fontSize: 15 }}>
              Home
            </p>
          </a>
          <a href="#whyus" style={{ textDecoration: "none" }}>
            <p style={{ color: "#fff", cursor: "pointer", fontSize: 15 }}>
              Why Us
            </p>
          </a>
          <a href="#properties" style={{ textDecoration: "none" }}>
            <p style={{ color: "#fff", cursor: "pointer", fontSize: 15 }}>
              Properties
            </p>
          </a>
        </Col>
        <Col xs={2} sm={2} md={2} lg={2}>
          <p style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>
            Support
          </p>
          <a href="#explore" style={{ textDecoration: "none" }}>
            <p style={{ color: "#fff", cursor: "pointer", fontSize: 15 }}>
              Explore
            </p>
          </a>
          <a href="#contact" style={{ textDecoration: "none" }}>
            <p style={{ color: "#fff", cursor: "pointer", fontSize: 15 }}>
              Customer Support
            </p>
          </a>
          <a href="#contact" style={{ textDecoration: "none" }}>
            <p style={{ color: "#fff", cursor: "pointer", fontSize: 15 }}>
              Sales Enquiries
            </p>
          </a>
        </Col>
        <Col xs={2} sm={2} md={2} lg={2}>
          <p style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>
            Contact us
          </p>
          <a href="#explore" style={{ textDecoration: "none" }}>
            <p style={{ color: "#fff", cursor: "pointer", fontSize: 15 }}>
              +91 8220944129
            </p>
          </a>
          <a href="#explore" style={{ textDecoration: "none" }}>
            <p style={{ color: "#fff", cursor: "pointer", fontSize: 15 }}>
              support@eliteestates.com
            </p>
          </a>
          <a href="#explore" style={{ textDecoration: "none" }}>
            <p style={{ color: "#fff", cursor: "pointer", fontSize: 15 }}>
              sales@eliteestates.com
            </p>
          </a>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12}>
          <hr style={{ color: "#ffffff" }} />
          <p style={{ color: "#ffffff", textAlign: "center" }}>
            Copyright <FaCopyright /> Elite Estates 2023 - All Rights Reserved
          </p>
        </Col>
      </Row>
    </Container>
  );
}
