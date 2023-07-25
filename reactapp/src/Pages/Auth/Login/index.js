import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginLogo from "../../../assets/Login.svg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useFormik } from "formik";
import * as Yup from "yup";
import WebsiteHeader from "../../../Components/WebsiteHeader";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email")
    .min(3, "User doesn't exist")
    .max(50, "User doesn't exist")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password is Incorrect")
    .max(50, "Password is Incorrect")
    .required("Password is required"),
});

export default function Login() {
  const navigate = useNavigate();
  const isMdUp = useMediaQuery({ minWidth: 768 });
  const [initialValues, setInitialValues] = useState({
    email: "",
    password: "",
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: LoginSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      handleSubmit(values);
    },
  });

  async function handleSubmit(value) {
    const data = value;
    let payload = {
      email: data?.email,
      password: data?.password,
    };
    // dispatch(getLoginDetailsAction(payload));
    console.log("login payload", payload);
  }
  return (
    <>
      <WebsiteHeader />
      <Container fluid style={{ backgroundColor: "#E8E8E8", height: "87vh" }}>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div className="d-none d-md-block">
              <div className="d-flex justify-content-center align-items-center px-5 pt-5">
                <h1
                  style={{ color: "#202020", fontSize: 40, fontWeight: "600" }}
                >
                  Unlock the Potential of Real Estate with Seamless Access
                </h1>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <img src={LoginLogo} style={{ width: "60%" }} />
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
                backgroundColor: "rgba(0,0,0,0.10)",
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
                  color: "#202020",
                }}
              >
                Login
              </h3>
              <Form onSubmit={formik.handleSubmit}>
                <Row>
                  <Col xs={12} sm={12} md={12} lg={12}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label style={{ color: "#202020" }}>
                        Email or Mobile number
                      </Form.Label>
                      <Form.Control
                        style={{ height: 40 }}
                        placeholder="Enter your email or mobile number"
                        onChange={(e) =>
                          setInitialValues({
                            ...initialValues,
                            email: e.target.value,
                          })
                        }
                      />
                      {formik.touched.email && formik.errors.email && (
                        <div>
                          <span
                            role="alert"
                            style={{ color: "red", fontSize: 13 }}
                          >
                            {formik.errors.email}
                          </span>
                        </div>
                      )}
                    </Form.Group>
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={12}>
                    <Form.Group className="mb-1" controlId="formGroupPassword">
                      <Form.Label style={{ color: "#202020" }}>
                        Password
                      </Form.Label>
                      <Form.Control
                        style={{ height: 40 }}
                        type="password"
                        placeholder="Enter your password"
                        onChange={(e) =>
                          setInitialValues({
                            ...initialValues,
                            password: e.target.value,
                          })
                        }
                      />
                      {formik.touched.password && formik.errors.password && (
                        <div>
                          <span
                            role="alert"
                            style={{ color: "red", fontSize: 13 }}
                          >
                            {formik.errors.password}
                          </span>
                        </div>
                      )}
                    </Form.Group>
                    <p
                      style={{
                        color: "#202020",
                        textAlign: "right ",
                        fontSize: 14,
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        navigate("/forgot-pwd");
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
                        background: "#202020",
                        borderRadius: 30,
                      }}
                    >
                      Login
                    </Button>
                  </Col>
                </Row>
              </Form>
              <p
                style={{ color: "#202020", textAlign: "center", fontSize: 14 }}
              >
                Don't have an account?{"  "}
                <a
                  style={{
                    color: "blue",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/register")}
                >
                  Register
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
