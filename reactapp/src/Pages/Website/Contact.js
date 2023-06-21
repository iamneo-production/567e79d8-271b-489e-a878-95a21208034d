import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./style.css";
import Customer from "../../assets/Contact/Customer.svg";
import Sales from "../../assets/Contact/Sales.svg";
import Media from "../../assets/Contact/Media.svg";

export default function Contact() {
  return (
    <Container fluid className="contactbg">
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} className="text-center pb-5">
          <h2>Get in touch with us for more information</h2>
          <p>If you have any questions or inquiries, we’re here for you</p>
        </Col>
      </Row>
      <Container>
        <Row className="pb-5">
          <Col
            xs={12}
            sm={12}
            md={4}
            lg={4}
            className="d-flex justify-content-center align-items-center mt-2"
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Customer} />
              <Card.Body className="text-center">
                <Card.Title>Customer Support</Card.Title>
                <Card.Text>
                  Email:support@nestworx.com
                  <br />
                  Phone: +91 8220944129
                </Card.Text>
                <Button
                  variant="primary"
                  style={{ background: "#00274C", width: "100%" }}
                >
                  Contact
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={4}
            lg={4}
            className="d-flex justify-content-center align-items-center mt-2"
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Sales} />
              <Card.Body className="text-center">
                <Card.Title>Sales Enquiries</Card.Title>
                <Card.Text>
                  Email:support@nestworx.com
                  <br />
                  Phone: +91 8220944129
                </Card.Text>
                <Button
                  variant="primary"
                  style={{ background: "#00274C", width: "100%" }}
                >
                  Contact
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={4}
            lg={4}
            className="d-flex justify-content-center align-items-center mt-2"
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Media} />
              <Card.Body className="text-center">
                <Card.Title>Media Enquiries</Card.Title>
                <Card.Text>
                  Email:support@nestworx.com
                  <br />
                  Phone: +91 8220944129
                </Card.Text>
                <Button
                  variant="primary"
                  style={{ background: "#00274C", width: "100%" }}
                >
                  Contact
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
