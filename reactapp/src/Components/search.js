import React from 'react'
import * as IoIcons from 'react-icons/io';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form';
import { AgentsData } from './AgentsData';
import input from './Agents'
const search= () => {
  return (
    <>
    <Container style={{paddingTop:"10px",paddingLeft:"125px"}}>
  <Form className="d-flex">
    <Form.Control type="search" placeholder="Search Agent" className="me-2" aria-label="Search"/>
    <Button variant="outline-success">Search</Button>
  </Form>
</Container>
<Container style={{paddingLeft:"125px",paddingTop:"20px"}} >
<table class="table table-striped" id="dev-table" style={{border:'1px solid'}}>
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
      {AgentsData.map((item)=>{
        return(
        <tr>
          <td>{item.aNo}</td>
          <td>{item.aName}</td>
          <td>{input}</td>
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

export default search