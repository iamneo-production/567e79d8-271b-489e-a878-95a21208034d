import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginLogo from "../../../assets/Login.svg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
// import * as Yup from "yup";

// const RegisterSchema = Yup.object().shape({
//   firstname: Yup.string()
//     .min(3, "First name is too short")
//     .max(50, "First name is too long")
//     .required("First name is required"),
//   lastname: Yup.string()
//     .min(3, "Last name is too short")
//     .max(50, "Last name is too long")
//     .required("Last name is required"),
//   email: Yup.string()
//     .email("Invalid Email")
//     .min(3, "User doesn't exist")
//     .max(50, "User doesn't exist")
//     .required("Email is required"),
//   mobile: Yup.string()
//     .mobile("Invalid mobile number")
//     .required("Mobile number is required"),
// password: Yup.string()
//   .min(8, "Password is Incorrect")
//   .max(50, "Password is Incorrect")
//   .required("Password is required"),
// confirm_password: Yup.string()
//   .min(8, "Password is Incorrect")
//   .max(50, "Password is Incorrect")
//   .required("Password is required"),
// });

export default function Register() {
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    password: "",
    confirm_password: "",
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    // validationSchema: RegisterSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      handleSubmit(values);
    },
  });

  async function handleSubmit(value) {
    const data = value;
    let payload = {
      firstname: data?.firstname,
      lastname: data?.lastname,
      email: data?.email,
      mobile: data?.mobile,
      password: data?.password,
      confirm_password: data?.confirm_password,
    };
    console.log("register payload", payload);
  }
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
            <Form onSubmit={formik.handleSubmit}>
              <Row>
                <Col xs={12} sm={12} md={6} lg={6}>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label style={{ color: "#FFFFFF" }}>
                      First Name
                    </Form.Label>
                    <Form.Control
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
                        <span role="alert" style={{ color: "red" }}>
                          {formik.errors.firstname}
                        </span>
                      </div>
                    )}
                  </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label style={{ color: "#FFFFFF" }}>
                      Last Name
                    </Form.Label>
                    <Form.Control
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
                        <span role="alert" style={{ color: "red" }}>
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
                    <Form.Label style={{ color: "#FFFFFF" }}>Email</Form.Label>
                    <Form.Control
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
                        <span role="alert" style={{ color: "red" }}>
                          {formik.errors.email}
                        </span>
                      </div>
                    )}
                  </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label style={{ color: "#FFFFFF" }}>
                      Mobile Number
                    </Form.Label>
                    <Form.Control
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
                        <span role="alert" style={{ color: "red" }}>
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
                    <Form.Label style={{ color: "#FFFFFF" }}>
                      Password
                    </Form.Label>
                    <Form.Control
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
                        <span role="alert" style={{ color: "red" }}>
                          {formik.errors.password}
                        </span>
                      </div>
                    )}
                  </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label style={{ color: "#FFFFFF" }}>
                      Confirm Password
                    </Form.Label>
                    <Form.Control
                      placeholder="Confirm your password"
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
                          <span role="alert" style={{ color: "red" }}>
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
