import React from 'react'
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row';
import Card from 'react-bootstrap/Card';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
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
  BarChart,
  PieChart,
  Pie,
} from "recharts";
import { Cell } from 'recharts';
const Revenue = () => {
  const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];
  const pieData = [
    {
       name: "A1",
       value: 5
    },
    {
       name: "A2",
       value: 10
    },
    {
       name: "A3",
       value: 3
    },
    {
       name: "A4",
       value: 5
    },
    {
       name: "A5",
       value: 12
    }
 ];
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
  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
       return (
       <div
          className="custom-tooltip"
          style={{
             backgroundColor: "#ffff",
             padding: "5px",
             border: "1px solid #cccc"
          }}
       >
          <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
       </div>
    );
 }
 return null;
};
  return (
    <>
<Container>
  <BarChart width={1000} height={300} data={data} style={{paddingLeft:"100px",paddingTop:"20px"}}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="Location" fill="#8884d8" />
  </BarChart>
  <h3 style={{paddingLeft:"350px"}}>Bar Graph for distribution of Property</h3>
</Container>
<Container>
  <Row>
    <Col>
<PieChart width={730} height={300}>
      <Pie
         data={pieData}
         color="#000000"
         dataKey="value"
         nameKey="name"
         cx="50%"
         cy="50%"
         outerRadius={120}
         fill="#8884d8"
      >
  {pieData.map((entry, index) => (
            <Cell
               key={`cell-${index}`}
               fill={COLORS[index %COLORS.length]}
            />
         ))}
  </Pie>
  <Tooltip content={<CustomTooltip />} />
  <Legend/>
</PieChart>
<h3 style={{paddingLeft:"150px"}}>Piechart for Property Sold by Agents</h3>
</Col>
<Col>
<Card style={{backgroundColor:"#ff0000"}}>
            <Card.Body>
            <FaIcons.FaMoneyCheckAlt className='fa-5x'/>
              <h4 style={{color:"black"}}>Total Revenue Generated</h4>
              <h3>20</h3>
            </Card.Body>
          </Card>
</Col>
</Row>

</Container>
</>
  )
}

export default Revenue