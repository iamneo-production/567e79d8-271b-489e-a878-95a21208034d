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
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [phone,setPhone]=useState('');
  const[description,setDescription]=useState('');
  const handleSubmit =(e)=>{
    e.preventDefault();
    const whole={name,email,phone,description};
    axios({
      method:'post',
      url:'http://localhost:8080/agents',
      data: whole
    }).then(()=>alert("New Agent Added"));
  }
  return (
<Container style={{paddingTop:"20px",paddingLeft:"150px"}}>
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Agent Name</Form.Label>
          <Form.Control type="name" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
        </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="number" placeholder="Enter Phone No" value={phone} onChange={(e)=>setPhone(e.target.value)}  />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control size="lg" type="text" placeholder="Large text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
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