import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import FormLabel from 'react-bootstrap/esm/FormLabel';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const UpdateAgent = () => {
    const location = useLocation();
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const status="Approved";
    const handleSubmit =(e)=>{
        e.preventDefault();
        const whole={name,price,status};
        axios({
          method:'put',
          url:`http://localhost:8080/properties/${location.state.id}`,
          data: whole
        }).then(()=>alert("Property Updated"));
      }
  return (
    <Container style={{paddingTop:"20px",paddingLeft:"150px"}}>
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Property Name</Form.Label>
          <Form.Control type="name" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
        </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Enter Price" value={price} onChange={(e)=>setPrice(e.target.value)}  />
      </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
</Container>
  )
}

export default UpdateAgent