import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import FormLabel from 'react-bootstrap/esm/FormLabel';

const AdProperty = () => {
  return (
<Container style={{paddingTop:"20px",paddingLeft:"150px"}}>
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Property Title</Form.Label>
          <Form.Control type="name" placeholder="Enter Property Title" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control type="textarea" placeholder="Description" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Agent</Form.Label>
        <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>
      <Row>
        <FormGroup as={Col} controlId="formGridprice">
            <FormLabel>Price</FormLabel>
            <Form.Control/>
        </FormGroup>

        <FormGroup as={Col} controlId="formGridprice">
            <FormLabel>Type</FormLabel>
            <Form.Control/>
        </FormGroup>

        <FormGroup as={Col} controlId="formGridprice">
            <FormLabel>Status</FormLabel>
            <Form.Control/>
        </FormGroup>
      </Row>
      <Row>
      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Images</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>

        <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Videos</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>

        <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Features</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>
      </Row>
      <Row>
      <Form.Group as={Col} controlId="formGridState" style={{paddingBottom:"10px"}}>
          <Form.Label>Agent</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
</Container>
  )
}

export default AdProperty