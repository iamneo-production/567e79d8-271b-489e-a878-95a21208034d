import React,{useState,useEffect} from "react";
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { PropertyData } from "./PropertyData";
import { API_BASE_URL } from "../../Config";
import { useNavigate } from "react-router-dom";
const Property = () => {
  const [data, setData] = useState([]);
  const navigate=useNavigate();
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/properties/`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  const deleteData = (id, e) => {
    axios.delete(`${API_BASE_URL}/properties/${id}`).then(() => {
      if (window.confirm("Deleted")) {
        window.location.reload();
      }
    });
  };
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
                <FaIcons.FaBuilding className="fa-5x" />
                <Link
                  to="/AdminHomepage/PropertyRecord"
                  style={{ textDecoration: "none" }}
                >
                  <h4 className="first" style={{ color: "black" }}>
                    Property Record
                  </h4>
                </Link>
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
                  to="/AdminHomepage/AdProperty"
                  style={{ textDecoration: "none" }}
                >
                  <h4 className="second" style={{ color: "black" }}>
                    Add Property
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
                <Link to="#" style={{ textDecoration: "none" }}>
                  <h4 className="third" style={{ color: "black" }}>
                    Approve Property
                  </h4>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container style={{ paddingLeft: "120px" }}>
        <h2 style={{ paddingTop: "20px" }}>Property List</h2>
        <table
          class="table table-striped"
          id="dev-table"
          style={{ border: "1px solid" }}
        >
          <thead>
            <tr>
              <th>Property No</th>
              <th>Property Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.status}</td>
                  <td>
                  <Button
                      variant="primary"
                      onClick={() =>
                        navigate("/AdminHomepage/UpdateProperty", { state: { id: item.id } })
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

export default Property;
