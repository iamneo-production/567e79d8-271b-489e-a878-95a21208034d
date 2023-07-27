
import React, { useState } from "react";

import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";

import { Container,Row } from "react-bootstrap";

import {useNavigate } from "react-router-dom";
import Navbar from "./Navbar"


export default function AdminLogin() {
const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function validateForm() {

    return email.length > 0 && password.length > 0;

  }

  function handleSubmit(event) {

    event.preventDefault();
    if (email=="abc" && password=="123"){
        navigate("/AdminHomepage");
    }
    else{
        alert("Incorrect email or passowrd");
    }

  }

  return (
    <>
    <Container>
    <Row>
    <Navbar style={{paddingBottom:"30px"}}/>
    </Row>
    <Row>
    <h4 style={{paddingBottom:"30px"}}>Admin Login Page</h4>

    <div style={{ display: 'block', 
                  width: 700, 
                  padding: 30 }}>
      
    <Form onSubmit={handleSubmit} >
      <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" value={email}
                        placeholder="Enter your username"  onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password}
                        placeholder="Enter your your password"  onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Button block size="lg" type="submit" disabled={!validateForm()}>

          Login

        </Button>

      </Form>

    </div>
    </Row>
    </Container>

    </>

  );

}