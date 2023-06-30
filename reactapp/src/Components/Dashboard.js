import React,{useState} from 'react'
import axios from 'axios'
import * as IoIcons from 'react-icons/io';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import "./Dashboard.css"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  CartesianAxis,
  Bar,
  BarChart
} from "recharts";
import { DashboardData } from './DashboardData';

const Dashboard = () => {
  const [hand,setHand]=useState('');
  axios.get('http://localhost:8080/api/v1/employees').then((res)=>setHand(res.data.length));
  const data = [
    {
      "name": "Kolkata",
      "Location": 20
    },
    {
      "name": "Bangalore",
      "Location": 10
    },
    {
      "name": "Hyderbad",
      "Location": 30
    },
    {
      "name": "Delhi",
      "Location": 15
    },
    {
      "name": "Mumbai",
      "Location": 25
    },
    {
      "name": "Chennai",
      "Location": 10
    },
    {
      "name": "Pune",
      "Location": 15
    }
  ]
  return (
    <>
<Container style={{paddingLeft:"125px",paddingTop:"50px"}}>
  <Row>
    <Col>
          <Card style={{backgroundColor:"#ff0000"}}>
            <Card.Body>
            <FaIcons.FaUserSecret className='fa-5x'/>
            <h3>{hand}</h3>
              <h4>Total Agent</h4>
            </Card.Body>
          </Card>
    </Col>
        <Col>
          <Card style={{backgroundColor:"#FC8213"}}>
            <Card.Body>
              <FaIcons.FaUser className='fa-5x'/>
              <h3>20</h3>
              <h4>Total User</h4>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{backgroundColor:"#1355f9"}}>
            <Card.Body>
            <FaIcons.FaBuilding className='fa-5x'/>
              <h3>50</h3>
              <h4>Total Properties Listed</h4>
            </Card.Body>
          </Card>
        </Col>
  </Row>
</Container>
<Container>
<Col>
<BarChart width={1000} height={300} data={data} style={{paddingLeft:"100px",paddingTop:"20px"}}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="Location" fill="#8884d8" />
</BarChart>
<h3 style={{paddingLeft:"350px"}}>Bar Graph for distribution of Property</h3>
</Col>
</Container>
<Container style={{paddingLeft:"120px"}}>
<Col>
<h2 style={{paddingTop:"20px",paddingLeft:"10px"}}>Recent Property Sold</h2>
<table class="table table-striped" id="dev-table" style={{border:'1px solid'}}>
      <thead>
        <tr>
          <th>Property No</th>
          <th>Property Name</th>
          <th>Agent Name</th>
          <th>Buyer Name</th>
          <th>Price</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
      {DashboardData.map((item)=>{
        return(
        <tr>
          <td>{item.pNo}</td>
          <td>{item.pName}</td>
          <td>{item.aName}</td>
          <td>{item.bName}</td>
          <td>{item.price}</td>
          <td>{item.location}</td>
        </tr>
        )
      })}
      </tbody>
    </table>
</Col>
</Container>
</>
  )
}

export default Dashboard