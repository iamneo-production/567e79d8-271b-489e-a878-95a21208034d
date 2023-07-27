import React, { useEffect, useState } from "react";
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import "./Agents.css";
import { AgentsData } from "./AgentsData";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Agents = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/employees")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  const deleteData = (id, e) => {
    axios.delete(`http://localhost:8080/api/v1/employees/${id}`).then(() => {
      if (window.confirm("Deleted")) {
        window.location.reload();
      }
    });
  };
  const navigate = useNavigate();
  return (
    <>
      <Container style={{ paddingLeft: "125px", paddingTop: "50px" }}>
        <Row>
          <Col>
            <Card
              style={{
                backgroundColor: "#ff0000",
                height: "175px",
                width: "200px",
              }}
            >
              <Card.Body>
                <FaIcons.FaUserSecret className="fa-5x" />
                  <h4 className="first" style={{ color: "black" }}>
                    Agent Count
                    20
                  </h4>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{
                backgroundColor: "#FC8213",
                height: "175px",
                width: "200px",
              }}
            >
              <Card.Body>
                <FaIcons.FaUserPlus className="fa-5x" />
                <Link
                  to="/AdminHomepage/AddAgent"
                  style={{ textDecoration: "none" }}
                >
                  <h4 className="second" style={{ color: "black" }}>
                    Add Agent
                  </h4>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{
                backgroundColor: "#1355f9",
                height: "175px",
                width: "200px",
              }}
            >
              <Card.Body>
                <FaIcons.FaCheckCircle className="fa-5x" />
                <Link
                  to="/AdminHomepage/Demo"
                  style={{ textDecoration: "none" }}
                >
                  <h4 className="third" style={{ color: "black" }}>
                    Approve Agents
                  </h4>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container style={{ paddingLeft: "120px" }}>
        <h2 style={{ paddingTop: "20px" }}>Agent List</h2>
        <table
          class="table table-striped"
          id="dev-table"
          style={{ border: "1px solid" }}
        >
          <thead>
            <tr>
              <th>Agent No</th>
              <th>Agent Name</th>
              <th>Property Count</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>
                    <Button
                      variant="primary"
                      onClick={() =>
                        navigate("/UpdateAgent", { state: { id: item.id } })
                      }
                    >
                      <AiIcons.AiFillEdit />
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="primary"
                      onClick={(e) => deleteData(item.id, e)}
                    >
                      <FaIcons.FaTrash />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Container>
    </>
  );
};

export default Agents;
