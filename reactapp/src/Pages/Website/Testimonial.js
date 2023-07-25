import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import WideSelect from "../../assets/WhyUs/WideSelect.svg";
import Star from "../../assets/Star.svg";
import LeftQuotes from "../../assets/LeftQuotes.svg";
import RightQuotes from "../../assets/RightQuotes.svg";
import Jane from "../../assets/Jane.svg";
import John from "../../assets/John.svg";
import David from "../../assets/David.svg";
import "./style.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PreviousButton = ({ onClick }) => (
  <button className="custom-previous-button" onClick={onClick}>
    <FaChevronLeft />
  </button>
);

const NextButton = ({ onClick }) => (
  <button className="custom-next-button" onClick={onClick}>
    <FaChevronRight />
  </button>
);

export default function Testimonial() {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} className="text-center">
          <h2>What Our Client Says</h2>
          <p>
            Our Clients send us bunch of smiles with our services and we love
            them
          </p>
        </Col>
      </Row>
      {/* <Row className="pb-5 pt-2"><</Row> */}
      <Row className="pb-5 pt-2">
        <Carousel
          prevIcon={<PreviousButton />}
          nextIcon={<NextButton />}
          indicators={false}
        >
          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center flex-column">
              <img src={Jane} className="mb-4" style={{ width: "15%" }} />
              <h5>Jane Smith</h5>
              <p>Melbourne, Australia</p>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img src={Star} style={{ width: "3%" }} />
              <img src={Star} style={{ width: "3%" }} />
              <img src={Star} style={{ width: "3%" }} />
              <img src={Star} style={{ width: "3%" }} />
            </div>
            <Row className="d-flex justify-content-center align-items-center text-center">
              <Col xs={12} sm={12} md={6} lg={6}>
                <div className="d-flex justify-content-start">
                  <img src={LeftQuotes} style={{ width: "8%" }} />
                </div>
                <p>
                  Nestworx made it simple to search for properties based on my
                  preferences. I highly recommend it to anyone in search of a
                  new home.
                </p>
                <div className="d-flex justify-content-end">
                  <img src={RightQuotes} style={{ width: "8%" }} />
                </div>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center flex-column">
              <img src={John} className="mb-4" style={{ width: "15%" }} />
              <h5>John Doe</h5>
              <p>Sydney, Australia</p>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img src={Star} style={{ width: "3%" }} />
              <img src={Star} style={{ width: "3%" }} />
              <img src={Star} style={{ width: "3%" }} />
              <img src={Star} style={{ width: "3%" }} />
              <img src={Star} style={{ width: "3%" }} />
            </div>
            <Row className="d-flex justify-content-center align-items-center text-center">
              <Col xs={12} sm={12} md={6} lg={6}>
                <div className="d-flex justify-content-start">
                  <img src={LeftQuotes} style={{ width: "8%" }} />
                </div>
                <p>
                  I found my dream home using Nestworx. The platform was easy to
                  use and the agents provided excellent support throughout the
                  process.
                </p>
                <div className="d-flex justify-content-end">
                  <img src={RightQuotes} style={{ width: "8%" }} />
                </div>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center flex-column">
              <img src={David} className="mb-4" style={{ width: "15%" }} />
              <h5>David Joseph</h5>
              <p>Melbourne, Australia</p>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img src={Star} style={{ width: "3%" }} />
              <img src={Star} style={{ width: "3%" }} />
              <img src={Star} style={{ width: "3%" }} />
              <img src={Star} style={{ width: "3%" }} />
            </div>
            <Row className="d-flex justify-content-center align-items-center text-center">
              <Col xs={12} sm={12} md={6} lg={6}>
                <div className="d-flex justify-content-start">
                  <img src={LeftQuotes} style={{ width: "8%" }} />
                </div>
                <p>
                  As a real estate agent, I appreciate Nestworx for its
                  user-friendly interface and the ability to connect with
                  potential buyers. It has greatly improved my business.
                </p>
                <div className="d-flex justify-content-end">
                  <img src={RightQuotes} style={{ width: "8%" }} />
                </div>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
  );
}
