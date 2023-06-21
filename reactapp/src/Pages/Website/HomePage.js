import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import SellHome from "../../assets/SellHome.svg";
import BuyHome from "../../assets/BuyHome.svg";
import RentHome from "../../assets/RentHome.svg";

export default function HomePage() {
  return (
    <Container fluid style={{ minHeight: "90vh", backgroundColor: "#00274C" }}>
      <Row>
        <Col className="d-flex justify-content-center">
          <div className="mt-5">
            <p
              style={{
                color: "#FFFFFF",
                textAlign: "center",
                fontSize: 22,
                fontWeight: "600",
              }}
            >
              Welcome to NestWor<span style={{ color: "#FF7F50" }}>X</span>
            </p>
            <p
              className="mt-3"
              style={{ color: "#FFFFFF", textAlign: "center", fontSize: 18 }}
            >
              Find your dream property with ease
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form className="d-flex justify-content-center">
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ borderRadius: 20, width: "50%" }}
            />
          </Form>
          <div className="d-flex justify-content-center align-items-center mt-3">
            <Badge className="mx-3" style={{ backgroundColor: "#3462A7" }}>
              Buy
            </Badge>
            <Badge className="mx-3" style={{ background: "#3462A7" }}>
              Rent
            </Badge>
            <Badge className="mx-3" style={{ background: "#3462A7" }}>
              Lease
            </Badge>
            <Badge className="mx-3" style={{ backgroundColor: "red" }}>
              Sell
            </Badge>
          </div>
        </Col>
      </Row>
      <Row className="p-5">
        <Col className="d-flex justify-content-center align-items-center">
          <div>
            <img src={SellHome} />
            <p
              className="pt-3"
              style={{ color: "#FFFFFF", textAlign: "center" }}
            >
              Sell smart, Sell Fast, Sell with <br />
              Confidence
            </p>
          </div>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <div>
            <img src={BuyHome} />
            <p
              className="pt-3"
              style={{ color: "#FFFFFF", textAlign: "center" }}
            >
              Discover the key to your ideal <br />
              home
            </p>
          </div>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <div>
            <img src={RentHome} />
            <p
              className="pt-3"
              style={{ color: "#FFFFFF", textAlign: "center" }}
            >
              Unlock the Perfect Rental Home <br />
              for Your Lifestyle
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
