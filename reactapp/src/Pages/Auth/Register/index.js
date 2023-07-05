import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginLogo from "../../../assets/Login.svg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  return (
    <Container fluid style={{ backgroundColor: "#00274C", minHeight: "100vh" }}>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <p className="py-4 px-5" style={{ color: "#FFFFFF", fontSize: 20 }}>
            Nestwor<span style={{ color: "#FF7F50" }}>X</span>
          </p>

          <div className="d-none d-md-block">
            <div className="d-flex justify-content-center align-items-center px-5">
              <h1 style={{ color: "#FFFFFF", fontSize: 34 }}>
                Elevate your real estate management with seamless registration
              </h1>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img src={LoginLogo} />
            </div>
          </div>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className="d-flex justify-content-center align-items-center"
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(to bottom right, rgba(255,255,255,0.1), rgba(255,255,255,0.1))",
              backdropFilter: "blur(5px)",
              backgroundColor: "rgba(0,0,0,0.05)",
              border: "1px solid rgba(248, 248, 248, 1)",
              borderRadius: 35,
              padding: 40,
            }}
          >
            <h3
              style={{
                fontSize: 25,
                fontWeight: 600,
                marginBottom: "10%",
                color: "#FFFFFF",
              }}
            >
              Register
            </h3>
            <Form>
              <Row>
                <Col xs={12} sm={12} md={6} lg={6}>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label style={{ color: "#FFFFFF" }}>
                      First Name
                    </Form.Label>
                    <Form.Control placeholder="Enter your first name" />
                  </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label style={{ color: "#FFFFFF" }}>
                      Last Name
                    </Form.Label>
                    <Form.Control placeholder="Enter your last name" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={6} lg={6}>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label style={{ color: "#FFFFFF" }}>Email</Form.Label>
                    <Form.Control placeholder="Enter your email address" />
                  </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label style={{ color: "#FFFFFF" }}>
                      Mobile Number
                    </Form.Label>
                    <Form.Control placeholder="Enter your mobile number" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={6} lg={6}>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label style={{ color: "#FFFFFF" }}>
                      Password
                    </Form.Label>
                    <Form.Control placeholder="Enter your password" />
                  </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label style={{ color: "#FFFFFF" }}>
                      Confirm Password
                    </Form.Label>
                    <Form.Control placeholder="Confirm your password" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <Button
                    className="mt-3 mb-1"
                    variant="primary"
                    type="submit"
                    style={{
                      width: "100%",
                      background: "#FFA500",
                      borderRadius: 30,
                    }}
                  >
                    Register
                  </Button>
                </Col>
              </Row>
            </Form>
            <p style={{ color: "#FFFFFF", textAlign: "center", fontSize: 14 }}>
              Already have an account?{" "}
              <a
                style={{ color: "#FFA500", cursor: "pointer" }}
                onClick={() => navigate("/login")}
              >
                Login
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
