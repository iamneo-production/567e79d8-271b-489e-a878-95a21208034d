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
import { UserData } from './UserData';
const Users = () => {
  return (
    <>
    <Container style={{paddingLeft:"125px",paddingTop:"50px"}}>
  <Row>
    <Col>
          <Card style={{backgroundColor:"#ff0000"}}>
            <Card.Body>
            <FaIcons.FaUser className='fa-5x'/>
            <Link to="/AdminHomepage/UserRecord" style={{textDecoration:"none"}}>
              <h4 className='first'style={{color:"black"}}>User Record</h4>
            </Link>
            </Card.Body>
          </Card>
    </Col>
        <Col>
          <Card style={{backgroundColor:"#FC8213"}}>
            <Card.Body>
              <FaIcons.FaUserPlus className='fa-5x'/>
            <Link to="/AdminHomepage/AddUser" style={{textDecoration:"none"}} >
              <h4 className='second' style={{color:"black"}}>Add User</h4>
            </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{backgroundColor:"#1355f9"}}>
            <Card.Body>
            <FaIcons.FaCheckCircle className='fa-5x'/>
            <Link to="#" style={{textDecoration:"none"}}>
              <h4 className='third' style={{color:"black"}}>Approve User</h4>
            </Link>
            </Card.Body>
          </Card>
        </Col>
  </Row>
</Container>
<Container style={{paddingLeft:"120px"}}>
<h2 style={{paddingTop:"20px"}}>User List</h2>
<table class="table table-striped" id="dev-table" style={{border:'1px solid'}}>
      <thead>
        <tr>
          <th>User No</th>
          <th>User Name</th>
          <th>Property Bought</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      {UserData.map((item)=>{
        return(
        <tr>
          <td>{item.uNo}</td>
          <td>{item.uName}</td>
          <td>{item.pBought}</td>
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

export default Users