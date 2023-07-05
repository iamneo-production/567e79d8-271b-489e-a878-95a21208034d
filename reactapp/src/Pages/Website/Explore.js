import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import House from "../../assets/Explore/House.svg";
import Bungalow from "../../assets/Explore/Bungalow.svg";
import SweetHome from "../../assets/Explore/SweetHome.svg";
import Apartments from "../../assets/Explore/Apartments.svg";
import office from "../../assets/Explore/office.svg";
import Condo from "../../assets/Explore/Condo.svg";
import DreamHome from "../../assets/Explore/DreamHome.svg";
import Coloniel from "../../assets/Explore/Coloniel.svg";
import Luxurious from "../../assets/Explore/Luxurious.svg";
import Duplex from "../../assets/Explore/Duplex.svg";
import "./style.css";

export default function Explore() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} className="text-center">
          <h2>Explore more by trending categories</h2>
        </Col>
      </Row>
      <Row className="img-row">
        <Col className="img-column">
          <img src={House} />
          <img src={office} />
        </Col>
        <Col className="img-column">
          <img src={Bungalow} />
          <img src={Condo} />
        </Col>
        <Col className="img-column">
          <img src={SweetHome} />
          <img src={DreamHome} />
          <img src={Luxurious} />
        </Col>
        <Col className="img-column">
          <img src={Apartments} />
          <img src={Coloniel} />
          <img src={Duplex} />
        </Col>
      </Row>
    </Container>
  );
}
