import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginLogo from "../../../assets/Login.svg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export default function Login() {
  const navigate = useNavigate();
  const isMdUp = useMediaQuery({ minWidth: 768 });
  return (
    <Container fluid style={{ backgroundColor: "#00274C", height: "100vh" }}>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <p className="py-4 px-5" style={{ color: "#FFFFFF", fontSize: 20 }}>
            Nestwor<span style={{ color: "#FF7F50" }}>X</span>
          </p>
          <div className="d-none d-md-block">
            <div className="d-flex justify-content-center align-items-center px-5">
              <h1 style={{ color: "#FFFFFF", fontSize: 34 }}>
                Unlock the Potential of Real Estate with Seamless Access
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
              width: isMdUp ? "65%" : "100%",
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
              Login
            </h3>
            <Form>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label style={{ color: "#FFFFFF" }}>
                      Email or Mobile number
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email or mobile number"
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <Form.Group className="mb-1" controlId="formGroupPassword">
                    <Form.Label style={{ color: "#FFFFFF" }}>
                      Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                    />
                  </Form.Group>
                  <p
                    style={{
                      color: "#FFFFFF",
                      textAlign: "right ",
                      fontSize: 14,
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      navigate("/register");
                    }}
                  >
                    Forgot password?
                  </p>
                </Col>
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
                    Login
                  </Button>
                </Col>
              </Row>
            </Form>
            <p style={{ color: "#FFFFFF", textAlign: "center", fontSize: 14 }}>
              Don't have an account?{" "}
              <a
                style={{ color: "#FFA500", cursor: "pointer" }}
                onClick={() => navigate("/register")}
              >
                Register
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
