import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import WideSelect from "../../assets/WhyUs/WideSelect.svg";
import UserInterface from "../../assets/WhyUs/UserInterface.svg";
import Agents from "../../assets/WhyUs/Agents.svg";

export default function Featured() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} className="text-center">
          <h2>Featured Properties</h2>
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
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={WideSelect} />
            <Card.Body>
              <Card.Title>&#8377;50,00,000</Card.Title>
              <Card.Text>
                House for sale
                <br />
                No.49, T.Nagar, Chennai.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={3}
          className="d-flex justify-content-center align-items-center mt-2"
        >
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={WideSelect} />
            <Card.Body>
              <Card.Title>&#8377;50,00,000</Card.Title>
              <Card.Text>
                House for sale
                <br />
                No.49, T.Nagar, Chennai.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={3}
          className="d-flex justify-content-center align-items-center mt-2"
        >
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={WideSelect} />
            <Card.Body>
              <Card.Title>&#8377;50,00,000</Card.Title>
              <Card.Text>
                House for sale
                <br />
                No.49, T.Nagar, Chennai.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={3}
          className="d-flex justify-content-center align-items-center mt-2"
        >
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={WideSelect} />
            <Card.Body>
              <Card.Title>&#8377;50,00,000</Card.Title>
              <Card.Text>
                House for sale
                <br />
                No.49, T.Nagar, Chennai.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <div className="d-none d-md-block">
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
        </div>
        <div className="d-block d-md-none">
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
        </div>
      </Row>
    </Container>
  );
}
