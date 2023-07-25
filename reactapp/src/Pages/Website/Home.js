import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import {
  FaLandmark,
  FaLocationArrow,
  FaSearch,
  FaSearchLocation,
} from "react-icons/fa";

export default function Home() {
  const navigate = useNavigate();
  return (
    <Container
      fluid
      className="homebg"
      style={{ minHeight: "90vh", backgroundColor: "#E8E8E8" }}
    >
      <Row>
        <Col
          xs={12}
          md={6}
          lg={6}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="mt-4">
            <p
              style={{
                color: "#202020",
                fontSize: 48,
                fontWeight: "600",
              }}
            >
              Easiest way to find
              <br />
              your dream place
            </p>

            <p className="mt-2" style={{ color: "#707070", fontSize: 16 }}>
              This is where you can find a dream place for you of
              <br />
              various types, all over the world at affordable prices.
            </p>
            <div>
              <Button
                className="mt-4"
                style={{
                  color: "#FFFFFF",
                  backgroundColor: "#202020",
                  borderColor: "#202020",
                }}
                onClick={() => {
                  navigate("/register");
                }}
              >
                Get Started
              </Button>
            </div>
            <div style={{ position: "relative" }}>
              <Form
                className="d-flex justify-content-center"
                style={{ position: "absolute", marginTop: "10%" }}
              >
                <Form.Control
                  type="search"
                  placeholder="Search by location.."
                  style={{
                    borderRadius: 15,
                    width: 650,
                    height: 70,
                    paddingInline: 40,
                  }}
                />
              </Form>
              <FaSearch style={{ position: "absolute", top: 67, left: 15 }} />
              <Button
                style={{
                  color: "#FFFFFF",
                  backgroundColor: "#202020",
                  borderColor: "#202020",
                  position: "absolute",
                  top: 55,
                  right: -250,
                  width: "25%",
                }}
              >
                Search
              </Button>
              <div style={{ position: "absolute", top: 130, display: "flex" }}>
                <div style={{ width: 150 }}>
                  <h1 style={{ fontSize: 22, fontWeight: "800" }}>20</h1>
                  <p>
                    Award
                    <br />
                    Winnings
                  </p>
                </div>
                <div style={{ width: 150 }}>
                  <h1 style={{ fontSize: 22, fontWeight: "800" }}>200+</h1>
                  <p>
                    Happy
                    <br />
                    Customer
                  </p>
                </div>
                <div style={{ width: 150 }}>
                  <h1 style={{ fontSize: 22, fontWeight: "800" }}>100+</h1>
                  <p>
                    Property
                    <br />
                    Ready
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
