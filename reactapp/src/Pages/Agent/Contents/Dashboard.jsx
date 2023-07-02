import React from 'react';
import './Dashboard.css';
import { Table, Container, Row, Col, Dropdown } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import { Line } from 'react-chartjs-2';
import {Icon} from 'leaflet';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js';


ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

function Dashboard() {
const total = 10;
const current = 5;
const sold = 5;
const verify = 2;
const cancel = 0;
const agentName = 'Agent1';
const rent = 100;
const rentAvailable = 10;
const saleAvailable = 10;
const rate = 100;


const data = {
  labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [{
    data: [3, 4, 9, 5, 2, 7 , 8, 0, 0, 0, 0, 0],
    backgroundColor:'white',
    borderColor: '#FFFFFF',
    pointBorderColor: '#FF0000',
    pointBorderWidth: 4,
    tension: 0.5
  }]
};

const options = {
  plugins: {
    legend: false
  },
  scales: {
    x: {
      grid: {
      display: false
      }
    },
    y: {
      min: 1,
      max: 10,
      ticks: {
        stepSize: 1,
        callback: (value) => value+'k'
      },
      grid: {
        borderDash: [10]
      }

    }
  }
}

const dataOne = {
    labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      data: [5, 4, 3, 5, 6, 7 , 8, 0, 0, 0, 0, 0],
      backgroundColor:'white',
      borderColor: '#FFFFFF',
      pointBorderColor: '#FF0000',
      pointBorderWidth: 4,
      tension: 0.5
    }]
  };
  
  const optionsOne = {
    plugins: {
      legend: false
    },
    scales: {
      x: {
        grid: {
        display: false
        }
      },
      y: {
        min: 1,
        max: 10,
        ticks: {
          stepSize: 1,
          callback: (value) => value+'k'
        },
        grid: {
          borderDash: [10]
        }
  
      }
    }
  }

  const dataTwo = {
    labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      data: [1, 2, 3, 1, 2, 0 , 3, 0, 0, 0, 0, 0],
      backgroundColor:'white',
      borderColor: '#FFFFFF',
      pointBorderColor: '#FF0000',
      pointBorderWidth: 4,
      tension: 0.5
    }]
  };
  
  const optionsTwo = {
    plugins: {
      legend: false
    },
    scales: {
      x: {
        grid: {
        display: false
        }
      },
      y: {
        min: 1,
        max: 10,
        ticks: {
          stepSize: 1,
          callback: (value) => value+'k'
        },
        grid: {
          borderDash: [10]
        }
  
      }
    }
  }

  const dataThree = {
    labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      data: [5, 2, 3, 4, 2, 7 , 3, 0, 0, 0, 0, 0],
      backgroundColor:'white',
      borderColor: '#FFFFFF',
      pointBorderColor: '#FF0000',
      pointBorderWidth: 4,
      tension: 0.5
    }]
  };
  
  const optionsThree = {
    plugins: {
      legend: false
    },
    scales: {
      x: {
        grid: {
        display: false
        }
      },
      y: {
        min: 1,
        max: 10,
        ticks: {
          stepSize: 1,
          callback: (value) => value+'k'
        },
        grid: {
          borderDash: [10]
        }
  
      }
    }
  }


  const markers = [
    {
      geocode: [12.9716, 77.5946],
      popUp: "Banglore"
    },
    {
      geocode: [13.0827, 80.2707],
      popUp: "Chennai"
    },
    {
      geocode: [23.2599, 77.4126],
      popUp: "Bhopal"
    },
    {
      geocode: [15.2993, 74.124],
      popUp: "Goa"
    }
  ];
  const customIcon = new Icon({
    iconUrl:
      "https://fontawesome.com/icons/location-pin?f=classic&s=solid&pc=%23ef0b0b",
    iconSize: [36, 36]
  });

  return (
    <Container>
      <h1 className='mt-5'>Welcome Back {agentName}</h1>
    <Row className='mt-5'>
        <Col>
         <Card className="first-card bg-dark text-white text-center">
         <Card.Header>Total No of Properties</Card.Header>
         <Card.Body>{total}</Card.Body>
         </Card>
        </Col>
        <Col>
         <Card className="second-card bg-dark text-white text-center">
         <Card.Header>Current Properties</Card.Header>
         <Card.Body>{current}</Card.Body>
         </Card>
       </Col>
       <Col>
        <Card className="third-card bg-dark text-white text-center">
        <Card.Header>Sold properties</Card.Header>
        <Card.Body>{sold}</Card.Body>
        </Card>
       </Col>
       <Col>
      <Card className="fourth-card bg-dark text-white text-center" >
        <Card.Header>Due for verification</Card.Header>
        <Card.Body>{verify}</Card.Body>
      </Card>
      </Col>
      <Col>
      <Card className="fiveth-card bg-dark text-white text-center" >
        <Card.Header>Cancelled properties</Card.Header>
        <Card.Body>{cancel}</Card.Body>
      </Card>
      </Col>
      </Row>
      <Row className='mt-5'>
        <Col>
        <Card className='tableone-card bg-dark text-white text-center'>
          <Card.Header>PROPERTY VERIFICATION STATUS</Card.Header>
          <Card.Body className='text-center'>
      <Table striped hover bordered variant="dark">
            <thead>
              <tr>
                <th width="150px">Property listed</th>
                <th width="100px">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Property 1</td>
                <td>Approved</td>
              </tr>
              <tr>
                <td>Property 2</td>
                <td>Pending</td>
              </tr>
              <tr>
                <td>Property 3</td>
                <td>Rejected</td>
              </tr>
              <tr>
                <td>Property 4</td>
                <td>Pending</td>
              </tr>
              <tr>
                <td>Property 5</td>
                <td>Approved</td>
              </tr>
            </tbody>     
       </Table>
       </Card.Body>
       </Card> 
       </Col>
       <Col>
       <Row>
       <Col>
      <Card className="sixth-card bg-dark text-white text-center">
        <Card.Header>Available for rent</Card.Header>
        <Card.Body>{rentAvailable}</Card.Body>
      </Card>
      </Col>
      <Col>
      <Card className="seventh-card bg-dark text-white text-center" >
        <Card.Header>Available for Sale</Card.Header>
        <Card.Body>{saleAvailable}</Card.Body>
      </Card>
      </Col>
       </Row>
       <Row className='mt-5'>
       <Col>
      <Card className="eighth-card bg-dark text-white text-center">
        <Card.Header>Total Properties Rented</Card.Header>
        <Card.Body>{rent}</Card.Body>
      </Card>
      </Col>
      <Col>
      <Card className="nineth-card bg-dark text-white text-center" >
        <Card.Header>Success Percentage</Card.Header>
        <Card.Body>{rate}</Card.Body>
      </Card>
      </Col>
       </Row>
       </Col>
       </Row>
       <Row className='mt-5'>
       <Col>
       <Card className='graphone-card bg-dark text-white'>
       <Card.Header>AGENT PROFILE TRAFFIC</Card.Header>
        <Line  data={dataOne} options={optionsOne} style = {{width:'100%'}}></Line>
        </Card>
       </Col>
      <Col className='ms-5'>
        <Card>
       <MapContainer center={[17.385, 78.4867]} zoom={8} style={{width:'100%'}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker) => (
        <Marker position={marker.geocode} icon={customIcon}>
          <Popup>{marker.popUp}</Popup>
        </Marker>
      ))}
    </MapContainer>
    </Card>
    </Col>
      </Row>
       <Row>
       <Col className='mt-5' >
       <Card className='graphtwo-card bg-dark text-white'>
       <Card.Header>PROPERTY TRAFFIC
       <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Property 764589
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Property 786478</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Property 786368</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Property 786475</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
       </Card.Header>
        <Line  data={data} options={options} style = {{width:'100%'}}></Line>
        </Card>
       </Col> 
       </Row>
       <Row className='mt-5'>
       <Col>
       <Card className='graphthree-card bg-dark text-white'>
       <Card.Header>TOTAL PROPERTIES RENTED</Card.Header>
        <Line  data={dataTwo} options={optionsTwo} style = {{width:'100%'}}></Line>
        </Card>
       </Col>
       <Col>
       <Card className='graphfour-card bg-dark text-white'>
       <Card.Header>TOTAL PROPERTIES SOLD</Card.Header>
        <Line  data={dataThree} options={optionsThree} style = {{width:'100%'}}></Line>
        </Card>
       </Col>
       </Row>
      </Container>
    
    
  );
}

export default Dashboard;