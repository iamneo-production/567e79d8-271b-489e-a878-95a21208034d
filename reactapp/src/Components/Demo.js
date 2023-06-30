import React from 'react';
import Button  from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import {Table} from 'react-bootstrap';

const Demo = () => {
    const LoanStatus=[
        {
            name:'Abc',
            loanId: 1,
            status: "Approved" , 
        },
        {
            name:'Abc',
            loanId: 1,
            status: "Approved" , 
        },
        {
            name:'Abc',
            loanId: 1,
            status: "Approved" , 
        },
        {
            name:'Abc',
            loanId: 1,
            status: "Approved" , 
        },
        {
            name:'Abc',
            loanId: 1,
            status: "Approved" , 
        },
        {
            name:'Abc',
            loanId: 1,
            status: "Approved" , 
        },
        {
            name:'Abc',
            loanId: 1,
            status: "Approved" , 
        }
    ]
  return (
    <Container style={{paddingTop:"20px"}}>
        <Table variant="striped" style={{border:"1px solid "}}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Loan Id</th>
                    <th>Status</th>
                    <th>View Report</th>
                </tr>
            </thead>
            <tbody>
            {LoanStatus.map((item,index)=>{
            return(
                <tr>
                    <td>{item.name}</td>
                    <td>{index}</td>
                    <td>{item.status}</td>
                    <td>
                        <Button variant="success">View Report</Button>
                    </td>
                </tr>
                )
            })}
            </tbody>
        </Table>
    </Container>
  )
}

export default Demo