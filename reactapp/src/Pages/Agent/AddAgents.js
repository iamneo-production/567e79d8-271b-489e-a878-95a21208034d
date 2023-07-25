import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import FormLabel from 'react-bootstrap/esm/FormLabel';
import axios from 'axios'

const AddAgent = () => {
  const [firstname,setName]=useState('');
  const [email,setEmail]=useState('');
  const [lastname,setPhone]=useState('');
  const handleSubmit =(e)=>{
    e.preventDefault();
    const whole={firstname,lastname,email};
    axios({
      method:'post',
      url:'http://localhost:8080/api/v1/employees',
      data: whole
    }).then(()=>alert("New Agent Added"));
  }
  return (
<Container style={{paddingTop:"20px",paddingLeft:"150px"}}>
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Agent Name</Form.Label>
          <Form.Control type="name" placeholder="Enter Name" value={firstname} onChange={(e)=>setName(e.target.value)}/>
        </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Phone No" value={lastname} onChange={(e)=>setPhone(e.target.value)}  />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
</Container>
  )
}

export default AddAgent