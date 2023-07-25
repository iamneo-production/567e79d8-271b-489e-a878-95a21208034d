import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import WideSelect from "../../assets/WhyUs/WideSelect.svg";
import Badge from "react-bootstrap/Badge";
import { FaArrowRight } from "react-icons/fa";

export default function Featured() {
  return (
    <Container>
      <Row>
        <Col
          className="d-flex justify-content-start align-items-center"
          xs={6}
          sm={6}
          md={6}
          lg={6}
        >
          <h2>Featured Properties</h2>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6}>
          <a
            className="d-flex justify-content-end align-items-center"
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            <h6 style={{ paddingRight: 10, paddingTop: 7 }}>Explore All</h6>
            <FaArrowRight />
          </a>
        </Col>
      </Row>
      <Row className="pb-5 pt-2">
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={3}
          className="d-flex justify-content-center align-items-center mt-2"
        >
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={WideSelect} />

            <Card.Body>
              <h1 style={{ fontSize: 20, fontWeight: "600" }}>
                &#8377;50,00,000
              </h1>
              <h6>No.49, T.Nagar, Chennai.</h6>
            </Card.Body>
            <div className="d-flex justify-content-start">
              <Badge bg="secondary">House</Badge>
              <Badge bg="secondary">For Sale</Badge>
              <Badge bg="secondary">1BHK</Badge>
            </div>
          </Card>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={3}
          className="d-flex justify-content-center align-items-center mt-2"
        >
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={WideSelect} />

            <Card.Body>
              <h1 style={{ fontSize: 20, fontWeight: "600" }}>
                &#8377;50,00,000
              </h1>
              <h6>No.49, T.Nagar, Chennai.</h6>
            </Card.Body>
            <div className="d-flex justify-content-start">
              <Badge bg="secondary">House</Badge>
              <Badge bg="secondary">For Sale</Badge>
              <Badge bg="secondary">1BHK</Badge>
            </div>
          </Card>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={3}
          className="d-flex justify-content-center align-items-center mt-2"
        >
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={WideSelect} />

            <Card.Body>
              <h1 style={{ fontSize: 20, fontWeight: "600" }}>
                &#8377;50,00,000
              </h1>
              <h6>No.49, T.Nagar, Chennai.</h6>
            </Card.Body>
            <div className="d-flex justify-content-start">
              <Badge bg="secondary">House</Badge>
              <Badge bg="secondary">For Sale</Badge>
              <Badge bg="secondary">1BHK</Badge>
            </div>
          </Card>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={3}
          className="d-flex justify-content-center align-items-center mt-2"
        >
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={WideSelect} />

            <Card.Body>
              <h1 style={{ fontSize: 20, fontWeight: "600" }}>
                &#8377;50,00,000
              </h1>
              <h6>No.49, T.Nagar, Chennai.</h6>
            </Card.Body>
            <div className="d-flex justify-content-start">
              <Badge bg="secondary">House</Badge>
              <Badge bg="secondary">For Sale</Badge>
              <Badge bg="secondary">1BHK</Badge>
            </div>
          </Card>
        </Col>
        {/* <div className="d-none d-md-block">
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            className="d-flex justify-content-center align-items-center mt-4"
          >
            <Button
              variant="primary"
              style={{
                width: "20%",
                background: "#00274C",
                borderRadius: 30,
                padding: 10,
              }}
            >
              Browse more
            </Button>
          </Col>
        </div> */}
        {/* <div className="d-block d-md-none">
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            className="d-flex justify-content-center align-items-center mt-4"
          >
            <Button
              variant="primary"
              style={{
                width: "50%",
                background: "#00274C",
                borderRadius: 30,
                padding: 10,
              }}
            >
              Browse more
            </Button>
          </Col>
        </div> */}
      </Row>
    </Container>
  );
}
