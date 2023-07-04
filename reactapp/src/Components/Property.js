import React from 'react'
import * as IoIcons from 'react-icons/io';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Form  from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { PropertyData } from './PropertyData';

const Property = () => {
return (
<>
  <Container style={{paddingLeft:"125px",paddingTop:"50px"}}>
    <Row>
      <Col>
        <Card style={{backgroundColor:"#ff0000",height:"175px",width:"200px"}}>
          <Card.Body>
            <FaIcons.FaBuilding className='fa-5x'/>
            <Link to="/AdminHomepage/PropertyRecord" style={{textDecoration:"none"}}>
              <h4 className='first'style={{color:"black"}}>Property Record</h4>
            </Link>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{backgroundColor:"#FC8213",height:"175px",width:"200px"}}>
          <Card.Body>
            <FaIcons.FaUserPlus className='fa-5x'/>
            <Link to="/AdminHomepage/AdProperty" style={{textDecoration:"none"}}>
              <h4 className='second' style={{color:"black"}}>Add Property</h4>
            </Link>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{backgroundColor:"#1355f9",height:"175px",width:"200px"}}>
          <Card.Body>
            <FaIcons.FaCheckCircle className='fa-5x'/>
            <Link to="#" style={{textDecoration:"none"}}>
              <h4 className='third' style={{color:"black"}}>Approve Property</h4>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  <Container style={{paddingLeft:"120px"}}>
    <h2 style={{paddingTop:"20px"}}>Property List</h2>
    <table class="table table-striped" id="dev-table" style={{border:'1px solid'}}>
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
      {PropertyData.map((item)=>{
        return(
        <tr>
          <td>{item.pNo}</td>
          <td>{item.pName}</td>
          <td>{item.price}</td>
          <td>{item.location}</td>
          <td>
            <Button variant='primary'>
            <AiIcons.AiFillEdit/>
            </Button>
          </td>
          <td>
          <Button variant='primary'>
            <FaIcons.FaTrash/>
          </Button>
          </td>
        </tr>
        )
      })}
      </tbody>
    </table>
  </Container>
</>
  )
}

export default Property