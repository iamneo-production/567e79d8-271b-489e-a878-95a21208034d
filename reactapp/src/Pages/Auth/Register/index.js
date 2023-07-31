import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginLogo from "../../../assets/Reg.svg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import WebsiteHeader from "../../../Components/WebsiteHeader";
import { authPost, post } from "../../../Config/services";
import { EndPoints } from "../../../Config/endPoints";
import Snackbar from "@mui/material/Snackbar";

const RegisterSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(3, "First name is too short")
    .max(50, "First name is too long")
    .required("First name is required"),
  email: Yup.string()
    .email("Invalid Email")
    .min(3, "User doesn't exist")
    .max(50, "User doesn't exist")
    .required("Email is required"),
  mobile: Yup.string()
    .min(10, "Invalid mobile number")
    .required("Mobile number is required"),
  password: Yup.string()
    .min(8, "Password length must be atleast 8 characters")
    .required("Password is required"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
  role: Yup.string().required("role is required"),
});

export default function Register() {
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    password: "",
    confirm_password: "",
    role: "",
  });

  const [snack, setSnack] = useState(false);
  const [message, setMessage] = useState("");

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: RegisterSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      handleSubmit(values);
    },
  });

  async function handleSubmit(value) {
    const data = value;
    let payload = {
      firstName: data?.firstname,
      lastName: data?.lastname,
      email: data?.email,
      mobile: data?.mobile,
      password: data?.password,
      roles: data?.role,
    };
    await authPost(EndPoints.register, payload)
      .then((res) => {
        navigate("/login");
        setSnack(true);
        setMessage(res?.message);
      })
      .catch((err) => {
        setSnack(true);
        setMessage(err?.message);
      });
    setTimeout(() => {
      setSnack(false);
    }, 3000);
  }
  return (
    <>
      <WebsiteHeader />
      <Container
        fluid
        style={{ backgroundColor: "#E8E8E8", minHeight: "87vh" }}
      >
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div className="d-none d-md-block">
              <div className="d-flex justify-content-center align-items-center px-5 pt-3">
                <h1
                  style={{ color: "#202020", fontSize: 40, fontWeight: "600" }}
                >
                  Elevate your real estate management with seamless registration
                </h1>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <img src={LoginLogo} style={{ width: "55%" }} />
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
              }}
            >
              <Form onSubmit={formik.handleSubmit}>
                <div className="d-flex justify-content-between">
                  <h3
                    style={{
                      fontSize: 25,
                      fontWeight: 600,
                      marginBottom: "8%",
                      color: "#202020",
                    }}
                  >
                    Register
                  </h3>
                  <div>
                    <Form.Check
                      inline
                      label="Buyer"
                      name="Buyer"
                      type="radio"
                      checked={initialValues.role === "ROLE_BUYER"}
                      value="ROLE_BUYER"
                      onChange={(e) =>
                        setInitialValues({
                          ...initialValues,
                          role: e.target.value,
                        })
                      }
                    />
                    <Form.Check
                      inline
                      label="Agent"
                      name="Agent"
                      type="radio"
                      checked={initialValues.role === "ROLE_AGENT"}
                      value="ROLE_AGENT"
                      onChange={(e) =>
                        setInitialValues({
                          ...initialValues,
                          role: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <Row>
                  <Col xs={12} sm={12} md={6} lg={6}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label style={{ color: "#202020" }}>
                        First Name
                      </Form.Label>
                      <Form.Control
                        style={{ height: 40 }}
                        placeholder="Enter your first name"
                        onChange={(e) =>
                          setInitialValues({
                            ...initialValues,
                            firstname: e.target.value,
                          })
                        }
                      />
                      {formik.touched.firstname && formik.errors.firstname && (
                        <div>
                          <span
                            role="alert"
                            style={{ color: "red", fontSize: 13 }}
                          >
                            {formik.errors.firstname}
                          </span>
                        </div>
                      )}
                    </Form.Group>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label style={{ color: "#202020" }}>
                        Last Name
                      </Form.Label>
                      <Form.Control
                        style={{ height: 40 }}
                        placeholder="Enter your last name"
                        onChange={(e) =>
                          setInitialValues({
                            ...initialValues,
                            lastname: e.target.value,
                          })
                        }
                      />
                      {formik.touched.lastname && formik.errors.lastname && (
                        <div>
                          <span
                            role="alert"
                            style={{ color: "red", fontSize: 13 }}
                          >
                            {formik.errors.lastname}
                          </span>
                        </div>
                      )}
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={12} md={6} lg={6}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label style={{ color: "#202020" }}>
                        Email
                      </Form.Label>
                      <Form.Control
                        style={{ height: 40 }}
                        placeholder="Enter your email address"
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
                  <Col xs={12} sm={12} md={6} lg={6}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label style={{ color: "#202020" }}>
                        Mobile Number
                      </Form.Label>
                      <Form.Control
                        style={{ height: 40 }}
                        placeholder="Enter your mobile number"
                        onChange={(e) =>
                          setInitialValues({
                            ...initialValues,
                            mobile: e.target.value,
                          })
                        }
                      />
                      {formik.touched.mobile && formik.errors.mobile && (
                        <div>
                          <span
                            role="alert"
                            style={{ color: "red", fontSize: 13 }}
                          >
                            {formik.errors.mobile}
                          </span>
                        </div>
                      )}
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={12} md={6} lg={6}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label style={{ color: "#202020" }}>
                        Password
                      </Form.Label>
                      <Form.Control
                        style={{ height: 40 }}
                        placeholder="Enter your password"
                        type="password"
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
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label style={{ color: "#202020" }}>
                        Confirm Password
                      </Form.Label>
                      <Form.Control
                        style={{ height: 40 }}
                        placeholder="Confirm your password"
                        type="password"
                        onChange={(e) =>
                          setInitialValues({
                            ...initialValues,
                            confirm_password: e.target.value,
                          })
                        }
                      />
                      {formik.touched.confirm_password &&
                        formik.errors.confirm_password && (
                          <div>
                            <span
                              role="alert"
                              style={{ color: "red", fontSize: 13 }}
                            >
                              {formik.errors.confirm_password}
                            </span>
                          </div>
                        )}
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
                        background: "#202020",
                        borderRadius: 30,
                      }}
                    >
                      Register
                    </Button>
                  </Col>
                </Row>
              </Form>
              <p
                style={{ color: "#202020", textAlign: "center", fontSize: 14 }}
              >
                Already have an account?{" "}
                <a
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={() => navigate("/login")}
                >
                  Login
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Snackbar
        open={snack}
        onClose={() => {
          setSnack(false);
        }}
        message={message}
      />
    </>
  );
}
