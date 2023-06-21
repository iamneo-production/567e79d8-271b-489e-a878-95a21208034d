import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WideSelect from "../../assets/WhyUs/WideSelect.svg";
import UserInterface from "../../assets/WhyUs/UserInterface.svg";
import Agents from "../../assets/WhyUs/Agents.svg";

export default function WhyUs() {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} className="text-center pb-5">
          <h2>Why choose us?</h2>
        </Col>
      </Row>
      <Row className="pb-5">
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className="d-flex justify-content-center align-items-center"
        >
          <div style={{ width: "70%" }}>
            <h4>Wide Selection</h4>
            <p style={{ fontSize: 18, textAlign: "justify" }}>
              Find your dream home among a diverse range of properties for sale
              or rent. From cozy apartments to spacious houses and luxurious
              properties, discover the perfect match for your preferences and
              budget in desirable locations.
            </p>
          </div>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className="d-flex justify-content-center align-items-center"
        >
          <img src={WideSelect} width="70%" />
        </Col>
      </Row>
      <Row className="pb-5">
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className="d-flex justify-content-center align-items-center"
        >
          <img
            src={UserInterface}
            width="70%"
            // style={{ borderRadius: "60%" }}
          />
        </Col>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className="d-flex justify-content-center align-items-center"
        >
          <div style={{ width: "70%" }}>
            <h4>User-friendly Interface</h4>
            <p style={{ fontSize: 18, textAlign: "justify" }}>
              Effortlessly navigate through our extensive property listings.
              Find your ideal home or investment opportunity with ease. Explore
              and discover properties that match your preferences and
              requirements.
            </p>
          </div>
        </Col>
      </Row>
      <Row className="pb-5">
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className="d-flex justify-content-center align-items-center"
        >
          <div style={{ width: "70%" }}>
            <h4>Expert Agents</h4>
            <p style={{ fontSize: 18, textAlign: "justify" }}>
              Connect with experienced real estate agents for personalized
              assistance. Our team of professionals is here to guide you through
              the buying or renting process. Benefit from their expertise and
              make informed decisions with their support.
            </p>
          </div>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className="d-flex justify-content-center align-items-center"
        >
          <img src={Agents} width="70%" />
        </Col>
      </Row>
    </Container>
  );
}
