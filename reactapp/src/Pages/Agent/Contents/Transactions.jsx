import React, {useState, useEffect} from 'react';
import './Transactions.css';
import { Container, Row, Col, Table} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
function Transactions() {

    const [total, setTotal] = useState(0);
    const [rent, setRent] = useState(0);
    const [sell, setSell] = useState(0);
  
    useEffect(() => {
      fetchData();
    }, []); 
  
    const fetchData = async () => {
      try {
        const response = await fetch('/api/revenue'); 
        if (!response.ok) {
          throw new Error('Failed to fetch data from the backend.');
        }
        const data = await response.json();
      
        setTotal(data.total);
        setRent(data.rent);
        setSell(data.sell);
      } catch (error) {
        console.error(error);
       
      }
    };
  
    return (
      <Container>
        <h1 className='mt-5'>Revenue and Transactions</h1>
        <Row className='mt-5'>
          <Col>
            <Card className='total-card bg-dark text-white text-center'>
              <Card.Header>Total Revenue</Card.Header>
              <Card.Body>{total}</Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='rent-card bg-dark text-white text-center'>
              <Card.Header>Revenue from Rent</Card.Header>
              <Card.Body>{rent}</Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='sell-card bg-dark text-white text-center'>
              <Card.Header>Revenue from sale</Card.Header>
              <Card.Body>{sell}</Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default Transactions;