import React from "react";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { GoMail } from "react-icons/go";
import { BsPhone } from "react-icons/bs";
const ContactAgent = ({ Agent }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  return (
    <span>
      <Button variant="outline-primary" onClick={handleShow}>
        Contact Agent
      </Button>
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h4
                style={{
                  fontSize: "22px",
                  fontWeight: "400",
                }}
              >
                Contact Agent
              </h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p
                  style={{
                    fontWeight: "700",
                    fontSize: "17px",
                  }}
                >
                  {Agent.agentName}
                </p>
                <p className="mail-icon">
                  <BsPhone />
                  <span> {Agent.contactNo}</span>
                </p>
                <p className="mail-icon">
                  <GoMail />
                  <span> {Agent.email}</span>
                </p>
              </div>

              <img
                src={Agent.url}
                class="rounded"
                alt="Profile image"
                width={"20%"}
              />
            </div>
            <Button
              variant="outline-primary"
              style={{ margin: "0 auto", display: "block" }}
            >
              View Agent
            </Button>
          </Modal.Body>
        </Modal>
      </div>
    </span>
  );
};

export default ContactAgent;
