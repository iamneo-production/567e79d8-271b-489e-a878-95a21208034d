import React from 'react'
import * as IoIcons from 'react-icons/io';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form';
import { UserData } from './UserData';
const UserRecord = () => {
  return (
<>
<Container style={{paddingLeft:"125px",paddingTop:"20px"}} >
<h2 style={{paddingTop:"20px"}}>User Record</h2>
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

export default UserRecord