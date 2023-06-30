import React from 'react'
import * as IoIcons from 'react-icons/io';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form';
import { AgentsData } from './AgentsData';
const AgentRecord = () => {
  return (
<>
  <Container style={{paddingLeft:"125px",paddingTop:"20px"}} >
  <h2 style={{paddingTop:"20px"}}>Agent Record</h2>
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
          <td>{item.pCount}</td>
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

export default AgentRecord