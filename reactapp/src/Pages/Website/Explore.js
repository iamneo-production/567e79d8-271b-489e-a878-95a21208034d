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
      <Row className="mb-4">
        <Col xs={12} sm={12} md={12} lg={12} className="text-center">
          <h2>Explore more by trending categories</h2>
        </Col>
      </Row>
      <Row className="img-row">
        <Col className="img-column">
          <div class="overlay-container">
            <img src={House} />
            <div class="overlay">
              <div class="overlay-text">House</div>
            </div>
          </div>
          <div class="overlay-container">
            <img src={office} />
            <div class="overlay">
              <div class="overlay-text">Make your Office</div>
            </div>
          </div>
        </Col>
        <Col className="img-column">
          <div class="overlay-container">
            <img src={Bungalow} />
            <div class="overlay">
              <div class="overlay-text">Bungalow</div>
            </div>
          </div>
          <div class="overlay-container">
            <img src={Condo} />
            <div class="overlay">
              <div class="overlay-text">Condo</div>
            </div>
          </div>
        </Col>
        <Col className="img-column">
          <div class="overlay-container">
            <img src={SweetHome} />
            <div class="overlay">
              <div class="overlay-text">Sweet Home</div>
            </div>
          </div>
          <div class="overlay-container">
            <img src={DreamHome} />
            <div class="overlay">
              <div class="overlay-text">Dream Home</div>
            </div>
          </div>
          <div class="overlay-container">
            <img src={Luxurious} />
            <div class="overlay">
              <div class="overlay-text">Luxurious</div>
            </div>
          </div>
        </Col>
        <Col className="img-column">
          <div class="overlay-container">
            <img src={Apartments} />
            <div class="overlay">
              <div class="overlay-text">Apartments</div>
            </div>
          </div>
          <div class="overlay-container">
            <img src={Coloniel} />
            <div class="overlay">
              <div class="overlay-text">Colonial</div>
            </div>
          </div>
          <div class="overlay-container">
            <img src={Duplex} />
            <div class="overlay">
              <div class="overlay-text">Duplex</div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
