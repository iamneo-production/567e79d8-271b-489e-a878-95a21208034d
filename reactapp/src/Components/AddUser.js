import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import FormLabel from 'react-bootstrap/esm/FormLabel';

const AddUser = () => {
  return (
<Container style={{paddingTop:"20px",paddingLeft:"150px"}}>
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Phone No</Form.Label>
        <Form.Control placeholder="number" />
      </Form.Group>






      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
</Container>
  )
}

export default AddUser