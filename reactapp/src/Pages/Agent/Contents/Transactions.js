import React from "react";
import "./Transactions.css";
import { Container, Row, Col, Table } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export default function Transactions() {
  const total = 10000;
  const rent = 3000;
  const sell = 8000;

  return (
    <Container>
      <h1 className="mt-5"> Revenue and Transactions</h1>
      <Row className="mt-5">
        <Col>
          <Card className="total-card bg-dark text-white text-center">
            <Card.Header>Total Revenue</Card.Header>
            <Card.Body>{total}</Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="rent-card bg-dark text-white text-center">
            <Card.Header>Revenue from Rent</Card.Header>
            <Card.Body>{rent}</Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="sell-card bg-dark text-white text-center">
            <Card.Header>Revenue from sale</Card.Header>
            <Card.Body>{sell}</Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="mt-5">
          <Card className="one-card bg-dark text-white text-center">
            <Card.Header>RENT TRANSACTION HISTORY </Card.Header>
            <Card.Body className="text-center">
              <Table striped hover bordered variant="dark">
                <thead>
                  <tr>
                    <th width="150px">Property ID</th>
                    <th width="100px">Property Address</th>
                    <th width="100px">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>35678</td>
                    <td>Delhi</td>
                    <td>Paid</td>
                  </tr>
                  <tr>
                    <td>56328</td>
                    <td>Agra</td>
                    <td>Paid</td>
                  </tr>
                  <tr>
                    <td>98238</td>
                    <td>Mumbai</td>
                    <td>Pending</td>
                  </tr>
                  <tr>
                    <td>78338</td>
                    <td>Agra</td>
                    <td>Pending</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        <Col className="mt-5">
          <Card className="two-card bg-dark text-white text-center">
            <Card.Header>SALE TRANSACTION HISTORY</Card.Header>
            <Card.Body className="text-center">
              <Table striped hover bordered variant="dark">
                <thead>
                  <tr>
                    <th width="150px">Property ID</th>
                    <th width="100px">Property Address</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>356789</td>
                    <td>Delhi</td>
                  </tr>
                  <tr>
                    <td>563829</td>
                    <td>Agra</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
