import React from "react";
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { PropertyData } from "./PropertyData";
const PropertyRecord = () => {
  return (
    <>
      <Container style={{ paddingLeft: "125px", paddingTop: "20px" }}>
        <h2 style={{ paddingTop: "20px" }}>Property Record</h2>
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
              <th>Location</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {PropertyData.map((item) => {
              return (
                <tr>
                  <td>{item.pNo}</td>
                  <td>{item.pName}</td>
                  <td>{item.price}</td>
                  <td>{item.location}</td>
                  <td>
                    <Button variant="primary">
                      <AiIcons.AiFillEdit />
                    </Button>
                  </td>
                  <td>
                    <Button variant="primary">
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

export default PropertyRecord;
