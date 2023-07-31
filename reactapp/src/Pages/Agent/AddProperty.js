/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { post } from "../../Config/services";
import { API_BASE_URL } from "../../Config";
import { useSelector } from "react-redux";

function AddProperty() {
  let navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [agentId, setAgentId] = useState("");

  const user = useSelector((e) => e?.user?.value);
  const agent = user?.userData;

  const [snack, setSnack] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    let payload = {
      title: title,
      description: description,
      address: address,
      price: price,
      type: type,
      status: status,
    };
    console.log("payload", payload);
    setAgentId(agent?.id);
    await post(
      `${API_BASE_URL}/api/agent/property?agentId=${agentId}`,
      payload
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className={"col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"}>
          <h2 className={"text-center m-4"}>Add Property</h2>

          <form onSubmit={() => onSubmit()}>
            <div className="row">
              <div className={"mb-3"}>
                <Form.Group as={Col} controlId="formGridNearbyLocation">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    required
                    placeholder="Enter the title"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className={"mb-3"}>
                <Form.Group as={Col} controlId="formGridNearbyLocation">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    required
                    placeholder="Enter the description"
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className={"mb-3"}>
                <Form.Group as={Col} controlId="formGridNearbyLocation">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    required
                    placeholder="Enter the address"
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                </Form.Group>
              </div>
            </div>

            <div className={"mb-3"}>
              <Form.Group as={Col} controlId="formGridNearbyLocation">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  required
                  placeholder="Enter the price of property"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </Form.Group>
            </div>

            <div className={"mb-3"}>
              <Form.Label>Features</Form.Label>
              <div className="d-flex">
                <Form.Check
                  type={"checkbox"}
                  label={"Water Supply"}
                  style={{ paddingRight: 15 }}
                />
                <Form.Check
                  type={"checkbox"}
                  label={"Swimming Pool"}
                  style={{ paddingRight: 15 }}
                />
                <Form.Check
                  type={"checkbox"}
                  label={"Gym"}
                  style={{ paddingRight: 15 }}
                />
                <Form.Check
                  type={"checkbox"}
                  label={"Play Ground"}
                  style={{ paddingRight: 15 }}
                />
              </div>
              <div className="d-flex">
                <Form.Check
                  type={"checkbox"}
                  label={"Elevators"}
                  style={{ paddingRight: 15 }}
                />
                <Form.Check
                  type={"checkbox"}
                  label={"Garden"}
                  style={{ paddingRight: 15 }}
                />
                <Form.Check
                  type={"checkbox"}
                  label={"Parking Space"}
                  style={{ paddingRight: 15 }}
                />
                <Form.Check
                  type={"checkbox"}
                  label={"Bed Rooms"}
                  style={{ paddingRight: 15 }}
                />
              </div>
              <div className="d-flex">
                <Form.Check
                  type={"checkbox"}
                  label={"Bath Rooms"}
                  style={{ paddingRight: 15 }}
                />
              </div>
            </div>

            <div className="row">
              <div className={"mb-3"}>
                <Form.Group as={Col} controlId="formGridNearbyLocation">
                  <Form.Label>Type</Form.Label>
                  <Form.Select
                    required
                    placeholder="Select type"
                    value={type}
                    onChange={(e) => {
                      setType(e.target.value);
                    }}
                  >
                    <option>Select type</option>
                    <option>Apartment</option>
                    <option>Bungalow</option>
                    <option>Villa</option>
                    <option>Land</option>
                  </Form.Select>
                </Form.Group>
              </div>
            </div>

            <div className="row">
              <div className={"mb-3"}>
                <Form.Group as={Col} controlId="formGridNearbyLocation">
                  <Form.Label>Status</Form.Label>
                  <Form.Select
                    required
                    placeholder="Select status"
                    value={status}
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                  >
                    <option>Select status</option>
                    <option>Sale</option>
                    <option>Rent</option>
                    <option>Lease</option>
                  </Form.Select>
                </Form.Group>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button style={{ backgroundColor: "white" }} type="submit">
                Submit
              </button>
              <div>
                <Link className={"btn btn-outline-danger mx-2"}>Cancel</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default AddProperty;
